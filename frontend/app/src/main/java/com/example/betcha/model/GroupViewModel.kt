package com.example.betcha.model

import android.util.Log
import androidx.compose.material3.SnackbarDuration
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.betcha.api.Socket
import com.example.betcha.presentation.components.SnackbarType
import com.example.betcha.repository.BetCreationData
import com.example.betcha.repository.BetRepository
import com.example.betcha.repository.BetStake
import com.example.betcha.repository.CloseBet
import com.example.betcha.repository.WinningChoice
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import javax.inject.Inject


@HiltViewModel
class GroupViewModel @Inject constructor(
    //savedStateHandle: SavedStateHandle,
    val socket: Socket,
    private val betRepository: BetRepository,
    private val sessionManager: SessionManager
    //private val sessionViewModel: SessionViewModel
) : ViewModel(),
    DefaultLifecycleObserver {
    //private val userId: String = savedStateHandle["userId"] ?: error("Missing userId")
    private val _sessionState = sessionManager.sessionState
    val userState: StateFlow<SessionState>
        get() {
            return _sessionState.asStateFlow()
        }

    val bets = betRepository.bets

    sealed interface UiEvent {
        data class ShowSnack(
            val message: String,
            val type: SnackbarType = SnackbarType.Info,
            val actionLabel: String? = null,
            val action: SnackAction? = null,
            val duration: SnackbarDuration = SnackbarDuration.Short
        ) : UiEvent
    }

    sealed interface SnackAction {
        data class RetryCreateBet(val data: BetCreationData) : SnackAction
        data class RetryUpdateStake(val data: BetStake) : SnackAction
        data class RetryCloseBet(val data: String) : SnackAction
        data class RetrySelectWinningChoice(val data: String) : SnackAction
    }

    private val _events = MutableSharedFlow<UiEvent>(extraBufferCapacity = 1)
    val events = _events.asSharedFlow()

    private fun emit(event: UiEvent) {
        if (!_events.tryEmit(event)) {
            viewModelScope.launch { _events.emit(event) }
        }
    }

    fun onSuccess(text: String) {
        emit(UiEvent.ShowSnack(text, type = SnackbarType.Success))
    }

    fun onBetCreateError(betData: BetCreationData) {
        emit(
            UiEvent.ShowSnack(
                message = "Failed to create bet",
                type = SnackbarType.Error,
                actionLabel = "Retry",
                action = SnackAction.RetryCreateBet(betData),
                duration = SnackbarDuration.Long
            )
        )
    }

    fun retryCreateBet(betData: BetCreationData) {
        createBet(betData)
    }

    fun onSetStakeError(stakeData: BetStake) {
        emit(
            UiEvent.ShowSnack(
                message = "Failed to update stake",
                type = SnackbarType.Error,
                actionLabel = "Retry",
                action = SnackAction.RetryUpdateStake(stakeData),
                duration = SnackbarDuration.Long
            )
        )
    }

    fun retrySetStake(stakeData: BetStake) {
        updateStake(stakeData)
    }

    fun onCloseBetError(betId: String) {
        emit(
            UiEvent.ShowSnack(
                message = "Failed to close bet",
                type = SnackbarType.Error,
                actionLabel = "Retry",
                action = SnackAction.RetryCloseBet(betId),
                duration = SnackbarDuration.Long
            )
        )
    }

    fun retryCloseBet(betId: String) {
        closeBet(betId)
    }

    fun onSelectWinningChoiceError(betId: String) {
        emit(
            UiEvent.ShowSnack(
                message = "Failed to submit the selected winning choice",
                type = SnackbarType.Error,
                actionLabel = "Retry",
                action = SnackAction.RetryCloseBet(betId),
                duration = SnackbarDuration.Long
            )
        )
    }

    fun retrySelectWinningChoice(choiceId: String) {
        selectWinningChoice(choiceId)
    }

//    init {
//        //getUserData(userId)
//        betRepository.subscribeToBetUpdates { updated ->
//            _bets.value = updated
//
//        }
//    }


//    fun getUserData(userId: String) {
//        // TODO add snackbar to error messages
//        viewModelScope.launch {
//            try {
//                val response = RetrofitClient.apiService.getUser(userId)
//                if (response.isSuccessful) {
//                    response.body()?.let { _userState.value.fromApiUser(it) }
//                } else {
//                    val errorMsg = response.errorBody()?.string()
//                    Log.i("api error: ", "HTTP ${response.code()}: $errorMsg")
//                }
//            } catch (e: Exception) {
//                Log.i("api error: ", "Network error: ${e.localizedMessage}")
//            }
//        }
//
//    }

    fun joinGroupSocket(userId: String, groupPin: String) {
        socket.connect()
        val jsonPayload = Json.encodeToString(
            mapOf("user_id" to userId, "group_pin" to groupPin)
        )
        Log.i("groupJoin", jsonPayload)

        socket.emit("requestJoinGroup", jsonPayload, callback = { response ->

            Log.i("socket join", response.toString())
        })
    }

    fun createBet(betData: BetCreationData) {
        //betData.group_pin = _sessionState.value.groupPin
        viewModelScope.launch {
            betData.user_id = _sessionState.value.userId
            betRepository.sendNewBet(betData) { response ->
                if (response["status"] == 200) {
                    onSuccess("New Bet created")
                } else {
                    onBetCreateError(betData)
                }
            }
        }
//        val json = Json.encodeToString(betData)
//        Log.i("bet repo", json)
//        socket.emit(
//            "requestCreateBet",
//            json,
//            callback = { response ->
//                Log.i("bet creation", response.toString())
//            }
//        )
    }

    fun updateStake(betStake: BetStake) {
        viewModelScope.launch {
            betStake.user_id = _sessionState.value.userId
            betRepository.sendStake(betStake) { response ->
                if (response["status"] == 200) {
                    onSuccess("Stake set on Bet")
                } else {
                    onSetStakeError(betStake)
                }
            }
        }
    }

    fun closeBet(betId: String) {
        viewModelScope.launch {
            betRepository.closeBet(
                CloseBet(
                    user_id = _sessionState.value.userId,
                    bet_id = betId
                )
            ) { response ->
                if (response["status"] == 200) {
                    onSuccess("Bet successfully closed")
                } else {
                    onCloseBetError(betId)
                }
            }
        }
    }

    fun selectWinningChoice(choiceId: String) {
        viewModelScope.launch {
            betRepository.selectWinningChoice(
                WinningChoice(
                    user_id = _sessionState.value.userId,
                    choice_id = choiceId
                )
            ) { response ->
                if (response["status"] == 200) {
                    onSuccess("Winning choice successfully selected")
                } else {
                    onSelectWinningChoiceError(choiceId)
                }
            }
        }
    }

}
