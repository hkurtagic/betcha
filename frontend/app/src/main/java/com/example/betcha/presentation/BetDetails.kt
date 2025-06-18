package com.example.betcha.presentation

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import com.example.betcha.repository.Bet
import com.example.betcha.repository.BetStake
import com.example.betcha.repository.Choice
import kotlinx.coroutines.android.awaitFrame

@Composable
fun BetDetails(
    bet: Bet,
    choice: Choice,
    onDismiss: () -> Unit,
    onConfirmBet: (BetStake) -> Unit,
) {
    //var text by remember { mutableStateOf("") }
    var amount by remember { mutableStateOf("") } // min 2 selections
    val focusRequester = remember { FocusRequester() }
    LaunchedEffect(focusRequester) {
        awaitFrame()
        focusRequester.requestFocus()
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text(bet.name) },
        text = {
            Column {
                Text(choice.text)
                OutlinedTextField(
                    value = amount,
                    onValueChange = { amount = it },
                    label = { Text("Bet Amount") },
                    modifier = Modifier.fillMaxWidth()
                )
            }
        },
        confirmButton = {
            TextButton(onClick = {
                if (amount.isNotBlank()) {
                    onConfirmBet(
                        BetStake(
                            bet_id = bet.bet_id,
                            user_id = "",
                            choice_id = choice.choice_id,
                            amount = amount.toDouble()
                        )
                    )
                }
            }) {
                Text("Create")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel")
            }
        }
    )
}