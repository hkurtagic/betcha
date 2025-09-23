package com.example.betcha.repository

import android.util.Log
import com.example.betcha.api.Socket
import com.example.betcha.model.SessionManager
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonIgnoreUnknownKeys
import org.json.JSONObject
import javax.inject.Inject
import javax.inject.Singleton

interface BetRepository {
    val users: StateFlow<List<User>>
    val bets: StateFlow<List<Bet>>

    //fun subscribeToBetUpdates(onUpdate: (List<Bet>) -> Unit)
    fun sendNewBet(bet: BetCreationData, callback: ((JSONObject) -> Unit))
    fun sendStake(stake: BetStake, callback: ((JSONObject) -> Unit))
    fun closeBet(closeBet: CloseBet, callback: ((JSONObject) -> Unit))
    fun selectWinningChoice(winningChoice: WinningChoice, callback: ((JSONObject) -> Unit))
}

@Serializable
data class BetCreationData(
    var user_id: String = "",
    val text: String,
    val selections: List<String>
)


@Serializable
data class BetDTO(
    val user_id: String,
    val bet_id: String,
    val name: String,
    val isClosed: Boolean,
    val choices: List<ChoiceDTO>,
    val BetStake: List<BetStake> = emptyList(),
    //val concludedInfo: ConcludedInfo? = null
) {
    fun mapToBetObject(myUserId: String, usersInGroup: List<User>?): Bet {
        val myBetStake = (BetStake.filter { b -> b.user_id == myUserId }).getOrNull(0)
        val potSize = (BetStake.sumOf { b -> b.amount })
        val mappedChoices = choices.map { c -> c.mapToChoiceObject(potSize, BetStake) }

        var concludedInfo: ConcludedInfo? = null
        if (isClosed && mappedChoices.any { c -> c.winningChoice }) {
            val winChoice = mappedChoices.filter { c -> c.winningChoice }[0]
            val totalWinningStake =
                BetStake.filter { it.choice_id == winChoice.choice_id }.sumOf { it.amount }
            val myWin = (myBetStake?.amount?.div(totalWinningStake)?.times(potSize))
            val winners =
                (BetStake.filter { bs -> bs.choice_id == winChoice.choice_id }).map { bs ->
                    Winner(
                        bs.user_id,
                        name = usersInGroup?.first { it.user_id == bs.user_id }?.name ?: "",
                        amount = bs.amount.div(totalWinningStake).times(potSize)
                    )
                }
            concludedInfo = ConcludedInfo(
                didWin = (myBetStake?.choice_id == winChoice.choice_id),
                myWin = myWin,
                winners = winners,
            )
        }
        return Bet(
            user_id = user_id,
            bet_id = bet_id,
            name = name,
            isClosed = isClosed,
            choices = mappedChoices,
            betStakes = BetStake,
            potSize = potSize,
            MyBet = myBetStake,
            concludedInfo = concludedInfo
        )
    }
}

@Serializable
data class ChoiceDTO(
    val choice_id: String,
    val text: String,
    val winningChoice: Boolean = false,
    val bet_id: String
) {
    fun mapToChoiceObject(potSize: Double, stakes: List<BetStake>): Choice {
        val percentage = if (stakes.isEmpty() || potSize == 0.0) {
            0.0
        } else {
            (stakes
                .filter { b -> b.choice_id == choice_id }
                .sumOf { b -> b.amount } / potSize) * 100
        }
        return Choice(
            choice_id = choice_id,
            text = text,
            winningChoice = winningChoice,
            percentage = percentage.toFloat()
        )
    }
}

@Serializable
@OptIn(ExperimentalSerializationApi::class)
@JsonIgnoreUnknownKeys
data class Bet(
    val user_id: String,
    val bet_id: String,
    val name: String,
    val isClosed: Boolean,
    val potSize: Double,
    val choices: List<Choice>,
    val betStakes: List<BetStake> = emptyList(),
    val MyBet: BetStake? = null,
    val concludedInfo: ConcludedInfo? = null
)

@OptIn(ExperimentalSerializationApi::class)
@Serializable
@JsonIgnoreUnknownKeys
data class Choice(
    val choice_id: String,
    val text: String,
    val winningChoice: Boolean = false,
    val percentage: Float // from 0 to 100
)

@OptIn(ExperimentalSerializationApi::class)
@Serializable
@JsonIgnoreUnknownKeys
data class BetStake(
    var user_id: String,
    val bet_id: String,
    val choice_id: String,
    val amount: Double
)

//@Serializable
//data class MyStake(
//    val choice_id: String,
//    val amount: Double
//)

@Serializable
data class ConcludedInfo(
    val didWin: Boolean, // true if current user won
    val myWin: Double?,
    val winners: List<Winner>,
)

@OptIn(ExperimentalSerializationApi::class)
@Serializable
@JsonIgnoreUnknownKeys
data class User(
    val user_id: String,
    val name: String
)

@Serializable
data class Winner(
    val user_id: String,
    val name: String? = "",
    val amount: Double? = null
)

@Serializable
data class CloseBet(
    val user_id: String,
    val bet_id: String
)

@Serializable
data class WinningChoice(
    val user_id: String,
    val choice_id: String
)


@Singleton
class BetRepositoryImpl @Inject constructor(
    private val socket: Socket,
    private val sessionManager: SessionManager
) : BetRepository {
    private var _users = MutableStateFlow<List<User>>(emptyList())
    override val users: StateFlow<List<User>>
        get() {
            return _users.asStateFlow()
        }
    private var _bets = MutableStateFlow<List<Bet>>(emptyList())
    override val bets: StateFlow<List<Bet>>
        get() {
            return _bets.asStateFlow()
        }

//    override fun subscribeToBetUpdates(onUpdate: (List<Bet>) -> Unit) {
//        eventRegistry.onBetUpdate = onUpdate
//    }

    init {
        socket.on("UserUpdate") { args ->
            val usersInGroup: List<User> = Json.decodeFromString((args as Array<*>)[0] as String)
            _users.value = usersInGroup
            Log.i(
                "Repo | UserUpdate",
                "Received ${users.value.size} Users in Group \n Usernames of members: \n ${
                    users.value.map { it.name + "\n" }
                }"
            )

        }
        socket.on("BetUpdate") { args ->
            val incomingBets: List<BetDTO> = Json.decodeFromString((args as Array<*>)[0] as String)
            //Json.decodeFromString(((args as Array<*>)[0] as JSONArray).toString())
            //Log.i("BetUpdate0", (args as Array<*>)[0].toString())
            //Log.i("BetUpdate1", Json.encodeToString<Array<BetDTO>>(args))
//            val b = incoming_bets.map { b ->
//                b.mapToBetObject(
//                    sessionManager.sessionState.value.userId
//                )
//            }
            //_bets.update { it.toMutableList().apply { it + b } }
//            val copied = b.map { it.copy() }
//            _bets.update { it + copied }
            val copied = incomingBets.map {
                it.mapToBetObject(sessionManager.sessionState.value.userId, _users.value).copy()
            }
            _bets.value = copied
            Log.d("Repo | Recomposition", "Updated with ${copied.size} bets")
//            _bets.update { current ->
//                current + copied
//            }
            //_bets.value = _bets.value.toMutableList().apply { addAll(b) }
//            _bets.update { current ->
//                current + incoming_bets.map { b ->
//                    b.mapToBetObject(sessionManager.sessionState.value.userId)
//                }
//            }
            //_bets = (_bets + b).toMutableList()
//                (Json.decodeFromString<List<BetDTO>>(args)).map { b ->
//                b.mapToBetObject(
//                    sessionManager.sessionState.value.userId
//                )
//            }
            Log.i("Repo | BetUpdate", "${bets.value}")
        }
    }

    override fun sendNewBet(bet: BetCreationData, callback: ((JSONObject) -> Unit)) {
        val json = Json.encodeToString(bet)
        Log.i("send bet", json)
        socket.emit(
            "requestCreateBet",
            json,
            callback = callback /*{ response ->
                Log.i("bet creation", response.toString())

            }*/
        )
    }

    override fun sendStake(stake: BetStake, callback: ((JSONObject) -> Unit)) {
        val json = Json.encodeToString(stake)
        Log.i("send stake", json)
        socket.emit(
            "requestCreateBetStake",
            json,
            callback = callback
            /*{ response ->
                Log.i("BetRepo | bet stake creation", response.toString())
            }*/
        )
    }

    override fun closeBet(closeBet: CloseBet, callback: ((JSONObject) -> Unit)) {
        val json = Json.encodeToString(closeBet)
        Log.i("Repo | closeBet", json)
        socket.emit(
            "requestCloseBet",
            json,
            callback = callback
        )
    }

    override fun selectWinningChoice(
        winningChoice: WinningChoice,
        callback: ((JSONObject) -> Unit)
    ) {
        val json = Json.encodeToString(winningChoice)
        Log.i("Repo | selectWinningChoice", json)
        socket.emit(
            "requestSelectWinningChoice",
            json,
            callback = callback
        )
    }

}