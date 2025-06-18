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
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.betcha.model.Bet
import com.example.betcha.model.MyBet
import com.example.betcha.model.Selection

@Composable
fun SelectionButton(
    text: String,
    percentage: Float,
    onClick: () -> Unit
) {
    val clampedPercentage = percentage.coerceIn(0f, 100f) / 100f
    val shape = RoundedCornerShape(8.dp)

    Button(
        onClick = onClick,
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
        border = BorderStroke(2.dp, MaterialTheme.colorScheme.outline),

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
                            colors = listOf(
                                MaterialTheme.colorScheme.primaryFixedDim,
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
fun BetCard(bet: Bet, onClick: () -> Unit) {
    Card(
        shape = RoundedCornerShape(16.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 8.dp),
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
        //.background(MaterialTheme.colorScheme.secondaryContainer)
    ) {
        Column(Modifier.padding(16.dp)) {
            Text(text = bet.text, style = MaterialTheme.typography.titleMedium)

            Spacer(modifier = Modifier.height(8.dp))

            Text("Total in Pot: ${bet.potSize}")

            if (bet.isActive) {
                Spacer(modifier = Modifier.height(8.dp))

                bet.selections.forEach { selection ->
                    SelectionButton(
                        text = selection.label,
                        percentage = selection.percentage,
                        //TODO: add setstake
                        onClick = {}
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                }

                bet.myBet?.let {
                    val selectedLabel = bet.selections.find { s -> s.id == it.selectionId }?.label
                    Text("Your Bet: ${it.amount} on $selectedLabel")
                }
            } else {
                Spacer(modifier = Modifier.height(8.dp))

                Text("Winners:")
                bet.concludedInfo?.winners?.forEach {
                    Text("- ${it.userName}: ${it.amount} Coins")
                }

                Spacer(modifier = Modifier.height(4.dp))

                if (bet.concludedInfo != null) {
                    if (bet.concludedInfo.didWin) {
                        Text("🎉 You won ${bet.concludedInfo.winnings} coins!", color = Color.Green)
                    } else {
                        Text("😢 You lost your bet", color = Color.Red)
                    }
                }
            }
        }
    }
}

@Preview
@Composable
fun PreviewBetCard() {
    val sampleBet = Bet(
        id = "1",
        text = "Who will win the match?",
        isActive = true,
        potSize = 1200,
        selections = listOf(
            Selection("1", "Team A", 99.0f),
            Selection("2", "Team B", 35.0f)
        ),
        myBet = MyBet("1", 100)
    )

    BetCard(bet = sampleBet,{})
}