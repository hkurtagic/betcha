package com.example.betcha.presentation.components

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import com.example.betcha.repository.Winner

@Composable
fun WinnerDetails(winner: Winner) {
    Text("${winner.name} won ${winner.amount} points")
}