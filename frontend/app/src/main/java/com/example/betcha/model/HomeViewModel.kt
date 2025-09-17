package com.example.betcha.model

import android.util.Log
import androidx.compose.foundation.text.input.TextFieldState
import androidx.compose.material3.SnackbarDuration
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.navigation.NavController
import com.example.betcha.Screen
import com.example.betcha.api.ApiNewUser
import com.example.betcha.api.RetrofitClient
import com.example.betcha.model.GroupViewModel.SnackAction
import com.example.betcha.model.GroupViewModel.UiEvent
import com.example.betcha.presentation.components.SnackbarType
import com.example.betcha.repository.BetCreationData
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class HomeViewModel @Inject constructor(
    private val sessionManager: SessionManager
) :
    ViewModel(),
    DefaultLifecycleObserver {
    init {
        getRandomUsername()
    }

    var groupPINError = mutableStateOf("")
    var usernameError = mutableStateOf("")

    private val _sessionState = sessionManager.sessionState
    val userState: StateFlow<SessionState>
        get() {
            return _sessionState.asStateFlow()
        }

    private val _state = MutableStateFlow(
        HomeScreenState()
    )

    val state: StateFlow<HomeScreenState>
        get() {
            return _state.asStateFlow()
        }

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
    }

    private val _events = MutableSharedFlow<UiEvent>(extraBufferCapacity = 1)
    val events = _events.asSharedFlow()

    private fun emit(event: UiEvent) {
        if (!_events.tryEmit(event)) {
            viewModelScope.launch { _events.emit(event) }
        }
    }
    fun onGetRandomUsernameError(errorMessage: String) {
        emit(
            UiEvent.ShowSnack(
                message = errorMessage,
                type = SnackbarType.Error,
                duration = SnackbarDuration.Long
            )
        )
    }

    fun getRandomUsername() {
        viewModelScope.launch {
            try {
                val response = RetrofitClient.apiService.getRandomUsername()
                if (response.isSuccessful) {
                    val username = response.body()!!
                    Log.i("api: ", username)
                    _state.value = _state.value.copy(
                        username = TextFieldState(username)
                    )
                } else {
                    val errorMsg = response.errorBody()?.string()
                    Log.i("api error: ", "HTTP ${response.code()}: $errorMsg")
                    onGetRandomUsernameError("Failed: Server responded with $errorMsg")
                }
            } catch (e: Exception) {
                Log.i("HomeViewModel | api error", "Network error: ${e.localizedMessage}")
                onGetRandomUsernameError("Failed to connect to Server")
            }
        }
    }

    fun validateInput(navController: NavController) {
        // check if all filled
        groupPINError.value = ""
        usernameError.value = ""
        if (_state.value.username.text == "")
            usernameError.value = "Username is required"
        viewModelScope.launch {
            try {
                val response = RetrofitClient.apiService.postNewUser(
                    ApiNewUser(
                        group_pin = _state.value.groupPIN.text.toString(),
                        user_name = _state.value.username.text.toString()
                    )
                )
                when (response.code()) {
                    in 200..300 -> {
                        //Log.i("res body", response.body().toString())
                        // _sessionState.up .updateSession(SessionState().fromApiUser(response.body()!!))
                        _sessionState.update { sessionManager.fromApiUser(response.body()!!).sessionState.value }
                        Log.i("NewUser", sessionManager.toString())
                    }

                    400 -> {
                        usernameError.value = "Username missing"
                    }

                    406 -> {
                        groupPINError.value = "Group does not exist!"
                    }

                    else -> {
                        val errorMsg = response.errorBody()?.string()
                        Log.i("api error: ", "HTTP ${response.code()}: $errorMsg")
                    }
                }
            } catch (e: Exception) {
                Log.i("api error: ", "Network error: ${e.localizedMessage}")
            }
        }
    }


    fun navigateToGroup(navController: NavController) {
        navController.navigate(Screen.GroupScreen.route)
    }
}
