package com.example.betcha.presentation

import android.util.Log
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.betcha.repository.Bet
import com.example.betcha.repository.BetStake
import com.example.betcha.repository.Choice

//TODO: implement logic

var shape = RoundedCornerShape(32.dp)

val betHeader = Color(0xFF3F3FFF)
val redSubmit = Color(0xFFFF3F3F)
val greenSubmit = Color(0xFF3FFF3F)
val yellowSubmit = Color(0xFFFFC23F)

val colorList = listOf(
    Color(0xFFFF593F),
    Color(0xFFFF9C3F),
    Color(0xFFFFD23F),
    Color(0xFFA2FF3F),
    Color(0xFF3FFF53),
    Color(0xFF3FFFC2),
    Color(0xFF3FCFFF),
    Color(0xFF3F5FFF),
    Color(0xFF9F3FFF),
    Color(0xFFFF3FE5),
)

enum class SubmitState(
    val text: String,
    val active: Boolean,
    val color: Color,
    var amount: Int? = null
) {
    SelectChoice("Select an option", false, yellowSubmit),
    AdjustStake("Change your Stake if you like", false, Color.Gray),
    Pending("Waiting for Owner to select winning option", false, Color.Gray),
    CloseBetState("Close bet", true, redSubmit),
    SelectWinningChoice("Select outcome", false, yellowSubmit),
    SubmitWinningChoice("Submit outcome", true, yellowSubmit),
    LoseMessage("You lost x point(s)", true, redSubmit),
    WinMessage("You won x point(s)", true, greenSubmit),
    ByStander("", false, Color.Transparent)
}

/**
 * Displays a progress bar composed of colored segments.
 *
 * The width of each segment is based on its corresponding percentage value,
 * with colors assigned from a predefined list.
 *
 * @param elements A list of [Choice] objects, each representing a segment.
 */
@Composable
fun ProgressBarContent(elements: List<Choice>) {
    Text(
        modifier = Modifier.padding(start = 16.dp, top = 8.dp),
        style = MaterialTheme.typography.titleMedium, text = "Bet destibution"
    )
    Row(
        modifier = Modifier
            .padding(top = 8.dp)
            .height(48.dp)
            .clip(shape),
        verticalAlignment = Alignment.CenterVertically
    ) {
        elements.forEach { choice ->
            val clampedPercentage = choice.percentage.coerceIn(0f, 100f) / 100f
            val bgcolor = elements.indexOf(choice) % 10
            if (clampedPercentage > 0) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth(fraction = clampedPercentage)
                        .fillMaxHeight()
                        .background(
                            colorList[bgcolor]
                        )
                        .weight(clampedPercentage)
                ) {}
            }
        }
    }
}

/**
 * Displays a list of clickable buttons, each representing a choice.
 *
 * The buttons are colored based on their position in the list, and the currently selected button
 * is visually distinct. Clicking a button triggers a callback with the ID of the selected choice.
 *
 * @param elements A list of [Choice] objects, each containing the data for a button.
 * @param selectedChoice The ID of the currently selected choice, used to highlight the button.
 * @param onChoiceClick A lambda function that is invoked with the ID of the clicked choice.
 */
@Composable
fun ChoiceButtons(
    elements: List<Choice>,
    isBetClosed: Boolean,
    selectedChoice: String,
    concludedInfo: () -> Boolean,
    onChoiceClick: (String) -> Unit
) {
    Text(
        modifier = Modifier.padding(start = 16.dp, top = 8.dp),
        style = MaterialTheme.typography.titleMedium, text = "Options"
    )
    elements.forEach { choice ->
        val isDone = concludedInfo()
        val bgColor = elements.indexOf(choice) % 10
        var color = colorList[bgColor]
        var alpha = 1f
        var enabled = false
        if (selectedChoice != choice.choice_id && !(isBetClosed && isDone)) alpha = 0.6f
        if (selectedChoice == "" || selectedChoice == choice.choice_id || (isBetClosed && !isDone)) enabled =
            true
        Button(
            onClick = { onChoiceClick(choice.choice_id) },
            modifier = Modifier
                .fillMaxWidth()
                .alpha(alpha)
                .clip(shape)
                .padding(top = 8.dp)
                .height(48.dp),
            contentPadding = PaddingValues(horizontal = 16.dp),
            enabled = enabled,
            colors = ButtonDefaults.buttonColors(
                containerColor = colorList[bgColor],
                contentColor = MaterialTheme.colorScheme.onPrimary,
                disabledContainerColor = colorList[bgColor],
                disabledContentColor = MaterialTheme.colorScheme.onPrimary
            ),
            elevation = ButtonDefaults.buttonElevation(0.dp),
        ) {
            Text(
                modifier = Modifier
                    .fillMaxWidth()
                    .align(Alignment.CenterVertically),
                text = choice.text,
                textAlign = TextAlign.Start
            )
        }
    }
}

/**
 * Displays a customizable submit button.
 *
 * The button's appearance, including its color, text, and active state, is
 * determined by a [SubmitState] object. The button's text can also be
 * dynamically updated with a numerical value if provided.
 *
 * @param state The [SubmitState] object that defines the button's properties.
 * @param onClick A lambda function that is invoked when the button is clicked.
 */
@Composable
fun SubmitButton(state: SubmitState, onClick: () -> Unit) {
    var color = state.color
    var alpha = 1f
    if (!state.active) alpha = 0.6f
    Button(
        onClick = { onClick() },
        modifier = Modifier
            .fillMaxWidth()
            .alpha(alpha)
            .clip(shape)
            .padding(top = 16.dp, bottom = 8.dp)
            .height(48.dp),
        contentPadding = PaddingValues(horizontal = 16.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = state.color,
            contentColor = MaterialTheme.colorScheme.onPrimary
        ),
        elevation = ButtonDefaults.buttonElevation(0.dp),
    ) {
        var text = state.text
        //if (state.amount != null) text = text.replace("x", state.amount.toString(), false)
        Text(
            modifier = Modifier
                .fillMaxWidth()
                .align(Alignment.CenterVertically),
            text = text,
            style = MaterialTheme.typography.titleMedium,
            textAlign = TextAlign.Center
        )
    }
}

@Composable
fun CloseBet(onClick: () -> Unit) {
    var state = SubmitState.CloseBetState
    Button(
        onClick = { onClick() },
        modifier = Modifier
            .fillMaxWidth()
            .clip(shape)
            .padding(top = 16.dp, bottom = 8.dp)
            .height(48.dp),
        contentPadding = PaddingValues(horizontal = 16.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = state.color,
            contentColor = MaterialTheme.colorScheme.onPrimary
        ),
        elevation = ButtonDefaults.buttonElevation(0.dp),
    ) {
        var text = state.text
        //if (state.amount != null) text = text.replace("x", state.amount.toString(), false)
        Text(
            modifier = Modifier
                .fillMaxWidth()
                .align(Alignment.CenterVertically),
            text = text,
            style = MaterialTheme.typography.titleMedium,
            textAlign = TextAlign.Center
        )
    }
}

@OptIn(ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun BetCardv2(
    user_id: String,
    bet: Bet,
    onChoiceClick: (BetStake) -> Unit,
    onBetClose: (String) -> Unit,
    onWinningChoice: (String) -> Unit
) {
    var showDialog by remember { mutableStateOf(false) }
    var selectedChoice by remember { mutableStateOf("") }
    var submitState by remember { mutableStateOf(SubmitState.ByStander) }
    //var closeState by remember { mutableStateOf(bet.isClosed) }
    shape = RoundedCornerShape(16.dp)

    LaunchedEffect(bet.isClosed, bet.concludedInfo) {
        Log.i("BetCard | submitState", submitState.name)
        submitState = if (!bet.isClosed && bet.MyBet == null) {
            SubmitState.SelectChoice
        } else if (!bet.isClosed && bet.MyBet != null) {
            SubmitState.AdjustStake
        } else if (bet.user_id == user_id && bet.choices.none { c -> c.winningChoice }) {
            SubmitState.SelectWinningChoice
        } else if (bet.user_id != user_id && bet.choices.none { c -> c.winningChoice }) {
            SubmitState.Pending
        } else if (bet.MyBet != null && bet.choices.any { c -> c.winningChoice } && bet.MyBet.choice_id == bet.choices.first { c -> c.winningChoice }.choice_id) {
            SubmitState.WinMessage
        } else if (bet.MyBet != null && bet.choices.any { c -> c.winningChoice } && bet.MyBet.choice_id != bet.choices.first { c -> c.winningChoice }.choice_id) {
            SubmitState.LoseMessage
        } else {
            SubmitState.ByStander
        }
    }


    Card(
        shape = shape,
        elevation = CardDefaults.cardElevation(defaultElevation = 8.dp),
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
    ) {
        shape = RoundedCornerShape(32.dp)
        if (showDialog) {
            BetDetails(
                bet,
                choice = bet.choices.find { c -> c.choice_id == selectedChoice }!!,
                onDismiss = {
                    showDialog = false
                    if (!bet.isClosed && bet.MyBet == null) selectedChoice = ""
                },
                onConfirmBet = {
                    onChoiceClick(it)
                    showDialog = false
                }
            )
        }

        Column(
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth()
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(shape = shape)
                    .background(betHeader)
                    .height(48.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    modifier = Modifier.padding(horizontal = 16.dp),
                    text = bet.name,
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.onPrimary
                )
            }
            if (bet.betStakes.isNotEmpty()) {
                ProgressBarContent(bet.choices)
            }
            ChoiceButtons(
                bet.choices,
                onChoiceClick = { choice_id ->
                    if (submitState == SubmitState.SelectChoice || submitState == SubmitState.AdjustStake) {
                        showDialog = true
                    }
                    selectedChoice = choice_id
                    if (submitState == SubmitState.SelectWinningChoice) submitState =
                        SubmitState.SubmitWinningChoice
                },
                selectedChoice = selectedChoice,
                isBetClosed = bet.isClosed,
                concludedInfo = { bet.concludedInfo != null }
            )
            if (submitState != SubmitState.ByStander) {
                SubmitButton(
                    state = submitState,
                    onClick = {
                        when (submitState) {
                            SubmitState.SelectChoice -> {
                                if (selectedChoice != "") {
                                    Log.i("SubmitButton", "SelectChoice")
                                }
                            }

                            SubmitState.Pending -> {
                                Log.i("SubmitButton", "Pending")
                            }

                            SubmitState.CloseBetState -> {
                                Log.i("SubmitButton", "CloseBet")
                            }

                            SubmitState.SelectWinningChoice -> {
                                Log.i("SubmitButton", "SelectWinningChoice")
                            }

                            SubmitState.SubmitWinningChoice -> {
                                onWinningChoice(selectedChoice)
                                Log.i("SubmitButton", "SubmitWinningChoice")
                            }

                            SubmitState.LoseMessage -> {
                                Log.i("SubmitButton", "LoseMessage")
                            }

                            SubmitState.WinMessage -> {
                                Log.i("SubmitButton", "WinMessage")
                            }

                            SubmitState.AdjustStake -> {
                                Log.i("SubmitButton", "AdjustStake")
                            }

                            SubmitState.ByStander -> {}
                        }
                    }
                )
            }
            if (user_id == bet.user_id && !bet.isClosed) {
//                CloseBet(onClick = {
//                    onBetClose(bet.bet_id)
//                    closeState = true
//                })
                Button(
                    onClick = {
                        onBetClose(bet.bet_id)
                        selectedChoice = ""
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(shape)
                        .padding(top = 16.dp, bottom = 8.dp)
                        .height(48.dp),
                    contentPadding = PaddingValues(horizontal = 16.dp),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = SubmitState.CloseBetState.color,
                        contentColor = MaterialTheme.colorScheme.onPrimary
                    ),
                    elevation = ButtonDefaults.buttonElevation(0.dp),
                ) {
                    Text(
                        modifier = Modifier
                            .fillMaxWidth()
                            .align(Alignment.CenterVertically),
                        text = SubmitState.CloseBetState.text,
                        style = MaterialTheme.typography.titleMedium,
                        textAlign = TextAlign.Center
                    )
                }
            }
        }
    }
}

@Preview
@Composable
fun PreviewBetCardv2() {
    val stake = BetStake(user_id = "1", bet_id = "1", amount = 100.00, choice_id = "1")
    val sampleBet = Bet(
        user_id = "1",
        name = "Who will win the match?",
        isClosed = false,
        potSize = 1200.00,
        choices = listOf(
            Choice("1", "Team A", false, 20.0f),
            Choice("2", "Team B", false, 15.0f),
            Choice("3", "Team C", false, 65.0f)
        ),
        MyBet = stake,
        bet_id = "1",
        betStakes = listOf(stake),
        concludedInfo = null
    )

    BetCardv2(
        bet = sampleBet,
        user_id = "1",
        onChoiceClick = {},
        onBetClose = {},
        onWinningChoice = {})
}
