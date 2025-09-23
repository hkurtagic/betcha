package com.example.betcha.model

import android.content.ClipData
import android.util.Log
import androidx.compose.material3.SnackbarDuration
import androidx.compose.ui.platform.ClipEntry
import androidx.compose.ui.platform.Clipboard
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.betcha.api.Socket
import com.example.betcha.presentation.components.SnackbarType
import com.example.betcha.presentation.components.UiEvent
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


sealed interface SnackAction {
    data class RetryCreateBet(val data: BetCreationData) : SnackAction
    data class RetryUpdateStake(val data: BetStake) : SnackAction
    data class RetryCloseBet(val data: String) : SnackAction
    data class RetrySelectWinningChoice(val data: String) : SnackAction
}

@HiltViewModel
class GroupViewModel @Inject constructor(
    val socket: Socket,
    private val betRepository: BetRepository,
    private val sessionManager: SessionManager
) : ViewModel(), DefaultLifecycleObserver {
    private val _sessionState = sessionManager.sessionState
    val userState: StateFlow<SessionState>
        get() {
            return _sessionState.asStateFlow()
        }

    val bets = betRepository.bets

    fun copyGroupId(clipboard: Clipboard, groupPin: String) {
        viewModelScope.launch {
            clipboard.setClipEntry(ClipEntry(ClipData.newPlainText("groupPIN", groupPin)))
            onSuccess("Group PIN copied")
        }
    }


    //region SnackbarEvents
    private val _events = MutableSharedFlow<UiEvent>(extraBufferCapacity = 1)
    val events = _events.asSharedFlow()

    private fun emit(event: UiEvent) {
        if (!_events.tryEmit(event)) {
            viewModelScope.launch { _events.emit(event) }
        }
    }

    private fun onSuccess(text: String) {
        emit(UiEvent.ShowSnack(text, type = SnackbarType.Success))
    }

    private fun onBetCreateError(betData: BetCreationData) {
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

    private fun onSetStakeError(stakeData: BetStake) {
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

    private fun onCloseBetError(betId: String) {
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

    private fun onSelectWinningChoiceError(betId: String) {
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
    //endregion SnackbarEvents

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
    }

    fun updateStake(betStake: BetStake) {
        viewModelScope.launch {
            betStake.user_id = _sessionState.value.userId
            betRepository.sendStake(betStake) { response ->
                if (response["status"] == 200) {
                    onSuccess("Stake updated")
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
