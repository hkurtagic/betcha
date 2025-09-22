package com.example.betcha.presentation

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.betcha.repository.Bet
import com.example.betcha.repository.BetStake
import com.example.betcha.repository.Choice

@Composable
fun SelectionButton(
    choice_id: String,
    text: String,
    percentage: Float,
    onChoiceClick: (String) -> Unit,
    isMyBet: Boolean
) {
    val clampedPercentage = percentage.coerceIn(0f, 100f) / 100f
    val shape = RoundedCornerShape(8.dp)

    Button(
        onClick = { onChoiceClick(choice_id) },
        modifier = Modifier
            .fillMaxWidth()
            .height(48.dp)
            .clip(shape),
        contentPadding = PaddingValues(0.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = Color.Transparent,
            contentColor = MaterialTheme.colorScheme.onPrimaryFixed
        ),
        elevation = ButtonDefaults.buttonElevation(0.dp),
        border = if (isMyBet) BorderStroke(
            2.dp,
            MaterialTheme.colorScheme.primary
        ) else BorderStroke(2.dp, MaterialTheme.colorScheme.outline),

        ) {
        Box(
            modifier = Modifier
            //.fillMaxSize()
            //.border(1.dp, Color.Gray, shape)
        ) {
            // Background for whole bar
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(Color.Transparent)
            )
            // Gradient filled part
            Box(
                modifier = Modifier
                    .fillMaxHeight()
                    .fillMaxWidth(clampedPercentage)
                    .background(
                        brush = Brush.horizontalGradient(
                            colors = if (isMyBet) listOf(
                                MaterialTheme.colorScheme.primaryFixed,
                                MaterialTheme.colorScheme.primary
                            ) else listOf(
                                MaterialTheme.colorScheme.primaryFixed,
                                MaterialTheme.colorScheme.primaryFixedDim
                            )
                        )
                    )
            )

            // Content
            Row(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(horizontal = 16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = text,
                    modifier = Modifier.weight(1f),
                    style = MaterialTheme.typography.bodyMedium
                )
                Text(
                    text = "${percentage.toInt()}%",
                    style = MaterialTheme.typography.bodyMedium
                )
            }
        }
    }
}

// TODO: onClick open details
@Composable
fun BetCard(bet: Bet, onChoiceClick: (BetStake) -> Unit) {
    var showDialog by remember { mutableStateOf(false) }
    var selectedChoice by remember { mutableStateOf("") }
    Card(
        shape = RoundedCornerShape(16.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 8.dp),
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
        //.background(MaterialTheme.colorScheme.secondaryContainer)
    ) {
        if (showDialog) {
            BetDetails(
                bet,
                choice = bet.choices.find { c -> c.choice_id == selectedChoice }!!,
                onDismiss = { showDialog = false },
                onConfirmBet = {
                    onChoiceClick(it)
                    showDialog = false
                }
            )
        }


        Column(Modifier.padding(16.dp)) {
            Text(text = bet.name, style = MaterialTheme.typography.titleMedium)

            Spacer(modifier = Modifier.height(8.dp))

            //Text("Total in Pot: ${bet.potSize}")

            if (!bet.isClosed) {
                Spacer(modifier = Modifier.height(8.dp))

                bet.choices.forEach { selection ->
                    SelectionButton(
                        choice_id = selection.choice_id,
                        text = selection.text,
                        percentage = selection.percentage,
                        onChoiceClick = {
                            showDialog = true
                            selectedChoice = it
                        },
                        isMyBet = (bet.choices.find { s -> s.choice_id == bet.MyBet?.choice_id }?.choice_id
                            ?: -1) == selection.choice_id
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                }

                bet.MyBet?.let {
                    val selectedLabel =
                        bet.choices.find { s -> s.choice_id == it.choice_id }?.text
                    Text("Your Bet: ${it.amount} on $selectedLabel")
                }
            } else {
                Spacer(modifier = Modifier.height(8.dp))

                Text("Winners:")
                bet.concludedInfo?.winners?.forEach {
                    Text("- ${it.name}: ${it.amount} Coins")
                }

                Spacer(modifier = Modifier.height(4.dp))

                if (bet.concludedInfo != null) {
                    if (bet.concludedInfo.didWin) {
                        Text("You won ${bet.concludedInfo.myWin}!", color = Color.Green)
                    } else {
                        Text("You lost your bet", color = Color.Red)
                    }
                }
            }
        }
    }
}

@Preview
@Composable
fun PreviewBetCard() {
    val stake = BetStake(user_id = "1", bet_id = "1", amount = 100.00, choice_id = "1")
    val sampleBet = Bet(
        user_id = "1",
        name = "Who will win the match?",
        isClosed = false,
        potSize = 1200.00,
        choices = listOf(
            Choice("1", "Team A", false, 95.0f),
            Choice("2", "Team B", false, 1.0f),
            Choice("3", "Team C", false, 50.0f)
        ),
        MyBet = stake,
        bet_id = "1",
        betStakes = listOf(stake),
        concludedInfo = null
    )

    BetCard(bet = sampleBet, {})
}