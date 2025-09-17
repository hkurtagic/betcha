package com.example.betcha.presentation

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.text.KeyboardOptions
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
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import com.example.betcha.repository.Bet
import com.example.betcha.repository.BetStake
import com.example.betcha.repository.Choice
import kotlinx.coroutines.android.awaitFrame
import java.text.DecimalFormatSymbols
import java.util.Locale

fun parseDouble(s: String, locale: Locale = Locale.getDefault()): Double? {
    val decEsc =
        { Regex.escape(DecimalFormatSymbols.getInstance(locale).decimalSeparator.toString()) }
    val valid = Regex("^\\d*(?:$decEsc\\d*)?$")
    return if (valid.matches(s)) {
        s.toDouble()
    } else {
        null
    }
}

data class NumberErrorMessages(
    val required: String = "Required",
    val invalid: String = "Enter a valid number",
    val negativeNotAllowed: String = "No negative numbers"
)

fun validateNumberText(
    text: String,
    required: Boolean,
    messages: NumberErrorMessages = NumberErrorMessages()
): String? {
    if (required && text.isEmpty()) return messages.required
    if (text.isEmpty()) return null
    val raw = text.trim()
    val parsed = parseDouble(raw)

    if (parsed == null) {
        if (raw == "-") return messages.negativeNotAllowed
        if (raw.isEmpty() || raw == "." || raw == ",") return messages.invalid
        return messages.invalid
    }

    if (parsed < 0.0) return messages.negativeNotAllowed

    return null
}


@Composable
fun BetDetails(
    bet: Bet,
    choice: Choice,
    onDismiss: () -> Unit,
    onConfirmBet: (BetStake) -> Unit,
) {
    //var text by remember { mutableStateOf("") }
    var amountText by remember { mutableStateOf("") }
    var amountValue: Double? by remember { mutableStateOf(null) }
    var amountError by remember { mutableStateOf(false) }
    val focusRequester = remember { FocusRequester() }
    LaunchedEffect(focusRequester) {
        awaitFrame()
        focusRequester.requestFocus()
    }
    val messages = NumberErrorMessages()
    val error = remember(amountText, amountValue, messages) {
        validateNumberText(
            text = amountText,
            required = false,
            messages = messages
        )
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text(bet.name) },
        text = {
            Column {
                Text(choice.text)
                OutlinedTextField(
                    value = amountText,
                    onValueChange = { raw ->
                        amountText = raw
                        if (raw.isNotEmpty() && validateNumberText(raw, required = false) == null) {
                            amountValue = parseDouble(raw)
                        }
                    },
                    label = { Text("Bet Amount") },
                    modifier = Modifier.fillMaxWidth(),
                    isError = error != null,
                    supportingText = {
                        Text(error ?: " ")
                    },
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Decimal,
                        imeAction = ImeAction.Done
                    )
                )
            }
        },
        confirmButton = {
            TextButton(onClick = {
                val err = validateNumberText(
                    amountText, required = true
                )
                if (err == null) {
                    onConfirmBet(
                        BetStake(
                            bet_id = bet.bet_id,
                            user_id = "",
                            choice_id = choice.choice_id,
                            amount = amountValue!!
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