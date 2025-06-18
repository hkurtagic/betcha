package com.example.betcha.model

import android.util.Log
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.betcha.api.Socket
import com.example.betcha.repository.BetCreationData
import com.example.betcha.repository.BetRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.StateFlow
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
            betRepository.sendNewBet(betData)
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


}