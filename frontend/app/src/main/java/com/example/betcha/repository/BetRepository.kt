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
import javax.inject.Inject
import javax.inject.Singleton

interface BetRepository {
    val bets: StateFlow<List<Bet>>

    //fun subscribeToBetUpdates(onUpdate: (List<Bet>) -> Unit)
    fun sendNewBet(bet: BetCreationData)
    fun sendStake(stake: BetStake)
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
    fun mapToBetObject(myUserId: String): Bet {
        val myBet = (BetStake.filter { b -> b.user_id == myUserId }).getOrNull(0)
        val potSize = (BetStake.sumOf { b -> b.amount })
        return Bet(
            user_id = user_id,
            bet_id = bet_id,
            name = name,
            isClosed = isClosed,
            choices = choices.map { c -> c.mapToChoiceObject(potSize, BetStake) },
            BetStakes = BetStake,
            potSize = potSize,
            MyBet = myBet,
            concludedInfo = null
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
            stakes
                .filter { b -> b.choice_id == choice_id }
                .sumOf { b -> b.amount } / potSize
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
    val BetStakes: List<BetStake> = emptyList(),
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

@Serializable
data class MyStake(
    val choice_id: String,
    val amount: Double
)

@Serializable
data class ConcludedInfo(
    val winners: List<Winner>,
    val didWin: Boolean,
    val winnings: Double
)

@Serializable
data class Winner(
    val userName: String,
    val amount: Double
)

@Singleton
class BetRepositoryImpl @Inject constructor(
    private val socket: Socket,
    private val sessionManager: SessionManager
) : BetRepository {
    private var _bets = MutableStateFlow<List<Bet>>(emptyList())
    override val bets: StateFlow<List<Bet>>
        get() {
            return _bets.asStateFlow()
        }

//    override fun subscribeToBetUpdates(onUpdate: (List<Bet>) -> Unit) {
//        eventRegistry.onBetUpdate = onUpdate
//    }

    init {
        socket.on("BetUpdate") { args ->
            val incoming_bets: List<BetDTO> = Json.decodeFromString((args as Array<*>)[0] as String)
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
            val copied = incoming_bets.map {
                it.mapToBetObject(sessionManager.sessionState.value.userId).copy()
            }
            _bets.value = copied
            Log.d("Recomposition", "Updated with ${copied.size} bets")
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
            Log.i("BetUpdate2", "${bets.value}")
        }
    }

    override fun sendNewBet(bet: BetCreationData) {
        val json = Json.encodeToString(bet)
        Log.i("send bet", json)
        socket.emit(
            "requestCreateBet",
            json,
            callback = { response ->
                Log.i("bet creation", response.toString())
            }
        )
    }

    override fun sendStake(stake: BetStake) {
        val json = Json.encodeToString(stake)
        Log.i("send stake", json)
        socket.emit(
            "requestCreateBetStake",
            json,
            callback = { response ->
                Log.i("bet stake creation", response.toString())
            }
        )
    }

}