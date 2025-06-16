package com.example.betcha.model

import androidx.compose.foundation.text.input.TextFieldState

data class HomeScreenState(
    var username: TextFieldState = TextFieldState(""),
    var groupPIN: TextFieldState = TextFieldState("")
) {}