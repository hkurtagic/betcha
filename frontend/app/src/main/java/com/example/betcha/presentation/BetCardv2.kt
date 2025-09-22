package com.example.betcha.presentation

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
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
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.betcha.repository.Bet
import com.example.betcha.repository.BetStake
import com.example.betcha.repository.Choice

var shape = RoundedCornerShape(32.dp)
val colorList = listOf(
    Color(0xFFFDF5E6),
    Color(0xFFB22222),
    Color(0xFFFF8140),
    Color(0xFF6363AA),
    Color(0xFF40FFAC),
    Color(0xFFFFEBCD),
    Color(0xFFF4A460),
    Color(0xFF8B0000),
    Color(0xFFFFDAB9),
    Color(0xFFD2691E),
)

@Composable
fun ProgressBarContent(elements: List<Choice>) {
    val betHeader = Color(0xFF3F3FFF)
    val redSubmit = Color(0xFFFF3F3F)
    val greenSubmit = Color(0xFF3FFF3F)
    val yellowSubmit = Color(0xFFFFC23F)

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

@Composable
fun BetCardv2(bet: Bet, onChoiceClick: (BetStake) -> Unit) {
    var showDialog by remember { mutableStateOf(false) }
    var selectedChoice by remember { mutableStateOf("") }
    shape = RoundedCornerShape(16.dp)
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
                onDismiss = { showDialog = false },
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
                    .background(MaterialTheme.colorScheme.primary)
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
            ProgressBarContent(bet.choices)

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
            Choice("3", "Team B", false, 65.0f)
        ),
        MyBet = stake,
        bet_id = "1",
        BetStakes = listOf(stake),
        concludedInfo = null
    )

    BetCardv2(bet = sampleBet, {})
}