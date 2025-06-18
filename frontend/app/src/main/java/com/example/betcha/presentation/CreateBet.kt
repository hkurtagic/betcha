package com.example.betcha.presentation

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

data class BetCreationData(
    var groupPin: String = "",
    var userId: String = "",
    val text: String,
    val selections: List<String>
)

@Composable
fun CreateBetDialog(
    onDismiss: () -> Unit,
    onCreate: (BetCreationData) -> Unit,
) {
    var text by remember { mutableStateOf("") }
    var selections by remember { mutableStateOf(listOf("", "")) } // min 2 selections

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Create New Bet") },
        text = {
            Column {
                OutlinedTextField(
                    value = text,
                    onValueChange = { text = it },
                    label = { Text("Bet Question") },
                    modifier = Modifier.fillMaxWidth()
                )
                Spacer(Modifier.height(8.dp))

                selections.forEachIndexed { index, value ->
                    OutlinedTextField(
                        value = value,
                        onValueChange = {
                            selections = selections.toMutableList().apply { set(index, it) }
                        },
                        label = { Text("Option ${index + 1}") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    Spacer(Modifier.height(4.dp))
                }

                TextButton(onClick = {
                    selections = selections + ""
                }) {
                    Text("Add Option")
                }
            }
        },
        confirmButton = {
            TextButton(onClick = {
                val validSelections = selections.map(String::trim).filter { it.isNotEmpty() }
                if (text.isNotBlank() && validSelections.size >= 2) {
                    onCreate(BetCreationData(text = text.trim(), selections = validSelections))
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

@Composable
fun CreateBetFab(onBetCreated: (BetCreationData) -> Unit) {
    var showDialog by remember { mutableStateOf(false) }

    Box(modifier = Modifier.fillMaxSize()) {
        FloatingActionButton(
            onClick = { showDialog = true },
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(16.dp)
        ) {
            Icon(Icons.Default.Add, contentDescription = "Create Bet")
        }

        if (showDialog) {
            CreateBetDialog(
                onDismiss = { showDialog = false },
                onCreate = {
                    onBetCreated(it)
                    showDialog = false
                }
            )
        }
    }
}