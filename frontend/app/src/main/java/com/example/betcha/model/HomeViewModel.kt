package com.example.betcha.model

import android.util.Log
import androidx.compose.foundation.text.input.TextFieldState
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.navigation.NavController
import com.example.betcha.Screen
import com.example.betcha.api.ApiNewUser
import com.example.betcha.api.RetrofitClient
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class HomeViewModel @Inject constructor() : ViewModel(), DefaultLifecycleObserver {
    init {
        getRandomUsername()
    }

    var groupPINError = mutableStateOf("")
    var usernameError = mutableStateOf("")

    private val _userState = MutableStateFlow(UserState())
    val userState: StateFlow<UserState>
        get() {
            return _userState.asStateFlow()
        }

    private val _state = MutableStateFlow(
        HomeScreenState()
    )

    val state: StateFlow<HomeScreenState>
        get() {
            return _state.asStateFlow()
        }


    fun getRandomUsername() {
        // TODO add snackbar to error messages
        viewModelScope.launch {
            try {
                val response = RetrofitClient.apiService.getRandomUsername()
                if (response.isSuccessful) {
                    val username = response.body()
                    if (username != null) {
                        Log.i("api: ", username)
                        _state.value = _state.value.copy(
                            username = TextFieldState(username)
                        )
                    } else {
                        Log.i("api error: ", "Empty response")
                    }
                } else {
                    val errorMsg = response.errorBody()?.string()
                    Log.i("api error: ", "HTTP ${response.code()}: $errorMsg")
                }
            } catch (e: Exception) {
                Log.i("api error: ", "Network error: ${e.localizedMessage}")
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
                if (response.isSuccessful) {
                    Log.i("res body", response.body().toString())
                    _userState.update {
                        it.copy(
                            userId = response.body()!!.user_id,
                            userName = response.body()!!.name,
                            groupPin = response.body()!!.groupPin
                        )
                    }
                    Log.i("NewUser", userState.value.toString())
                } else {
                    val errorMsg = response.errorBody()?.string()
                    Log.i("api error: ", "HTTP ${response.code()}: $errorMsg")
                }
            } catch (e: Exception) {
                Log.i("api error: ", "Network error: ${e.localizedMessage}")
            }
        }
    }


    fun navigateToGroup(navController: NavController, userState: UserState) {
        navController.navigate(Screen.GroupScreen.createRoute(userId = userState.userId))
    }
}
