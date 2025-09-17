package com.example.betcha.presentation.components

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Snackbar
import androidx.compose.material3.SnackbarDuration
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.SnackbarVisuals
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch

enum class SnackbarType { Success, Error, Info }

data class AppSnackbarVisuals(
    override val message: String,
    override val actionLabel: String? = null,
    override val withDismissAction: Boolean = false,
    override val duration: SnackbarDuration = SnackbarDuration.Short,
    val type: SnackbarType = SnackbarType.Info
) : SnackbarVisuals

@Composable
fun rememberAppSnackbarState(): Pair<SnackbarHostState, SnackbarManager> {
    val hostState = remember { SnackbarHostState() }
    val scope = rememberCoroutineScope()
    return hostState to SnackbarManager(hostState, scope)
}

class SnackbarManager(
    private val hostState: SnackbarHostState,
    private val scope: CoroutineScope
) {
    fun showSuccess(message: String, actionLabel: String? = null) =
        show(message, SnackbarType.Success, actionLabel)

    fun showError(message: String, actionLabel: String? = null) =
        show(message, SnackbarType.Error, actionLabel)

    fun showInfo(message: String, actionLabel: String? = null) =
        show(message, SnackbarType.Info, actionLabel)

    private fun show(message: String, type: SnackbarType, actionLabel: String?) {
        scope.launch {
            hostState.showSnackbar(
                AppSnackbarVisuals(
                    message = message,
                    actionLabel = actionLabel,
                    type = type
                )
            )
        }
    }
}

@Composable
fun AppSnackbarHost(hostState: SnackbarHostState, modifier: Modifier) {
    SnackbarHost(hostState = hostState, modifier = modifier) { data ->
        val visuals = data.visuals as? AppSnackbarVisuals
        val type = visuals?.type ?: SnackbarType.Info

        val (container, content, action) = when (type) {
            SnackbarType.Success -> Triple(
                MaterialTheme.colorScheme.inversePrimary,
                MaterialTheme.colorScheme.onPrimaryContainer,
                MaterialTheme.colorScheme.onPrimaryContainer
            )

            SnackbarType.Error -> Triple(
                MaterialTheme.colorScheme.errorContainer,
                MaterialTheme.colorScheme.onErrorContainer,
                MaterialTheme.colorScheme.onErrorContainer
            )

            SnackbarType.Info -> Triple(
                MaterialTheme.colorScheme.inverseSurface,
                MaterialTheme.colorScheme.inverseOnSurface,
                MaterialTheme.colorScheme.inverseOnSurface
            )
        }

        Snackbar(
            snackbarData = data,
            containerColor = container,
            contentColor = content,
            actionColor = action,
            shape = MaterialTheme.shapes.medium
        )
    }
}
