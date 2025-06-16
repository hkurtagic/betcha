package com.example.betcha.model

import android.util.Log
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.betcha.api.RetrofitClient
import com.example.betcha.api.socket
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import javax.inject.Inject

@HiltViewModel
class GroupViewModel @Inject constructor(savedStateHandle: SavedStateHandle) : ViewModel(),
    DefaultLifecycleObserver {
    private val userId: String = savedStateHandle["userId"] ?: error("Missing userId")
    private val _userState = MutableStateFlow(UserState())
    val userState: StateFlow<UserState>
        get() {
            return _userState.asStateFlow()
        }

    init {
        getUserData(userId)
    }


    fun getUserData(userId: String) {
        // TODO add snackbar to error messages
        viewModelScope.launch {
            try {
                val response = RetrofitClient.apiService.getUser(userId)
                if (response.isSuccessful) {
                    response.body()?.let { _userState.value.fromApiUser(it) }
                } else {
                    val errorMsg = response.errorBody()?.string()
                    Log.i("api error: ", "HTTP ${response.code()}: $errorMsg")
                }
            } catch (e: Exception) {
                Log.i("api error: ", "Network error: ${e.localizedMessage}")
            }
        }

    }


    fun joinGroupSocket(userId: String, groupPin: String) {
        socket.connect()
        val jsonPayload = Json.encodeToString(
            mapOf("user_id" to userId, "group_pin" to groupPin)
        )
        socket.emit("requestJoinGroup", jsonPayload)
    }

}