package com.example.betcha.presentation

import android.annotation.SuppressLint
import android.content.res.Configuration.UI_MODE_NIGHT_YES
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.CenterAlignedTopAppBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarResult
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults.topAppBarColors
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.platform.LocalClipboard
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.lifecycle.SavedStateHandle
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import com.example.betcha.R
import com.example.betcha.model.GroupViewModel
import com.example.betcha.model.SnackAction
import com.example.betcha.presentation.components.AppSnackbarHost
import com.example.betcha.presentation.components.AppSnackbarVisuals
import com.example.betcha.presentation.components.UiEvent
import com.example.betcha.presentation.components.rememberAppSnackbarState
import com.example.betcha.ui.theme.BetchaTheme
import kotlinx.coroutines.flow.collectLatest

@OptIn(ExperimentalMaterial3Api::class, ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun GroupScreen(
    modifier: Modifier,
    navController: NavController,
    groupViewModel: GroupViewModel = hiltViewModel(),
) {
    val (snackbarHostState, snackbarManager) = rememberAppSnackbarState()
    val userState by groupViewModel.userState.collectAsState()
    val betState by groupViewModel.bets.collectAsState()
    val clipboard = LocalClipboard.current


    LaunchedEffect(userState.groupPin) {
        if (userState.groupPin != "" && !groupViewModel.socket.isConnected()) {
            groupViewModel.joinGroupSocket(userState.userId, userState.groupPin)
        }
    }
    LaunchedEffect(Unit) {
        groupViewModel.events.collectLatest { e ->
            when (e) {
                is UiEvent.ShowSnack -> {
                    val result = snackbarHostState.showSnackbar(
                        AppSnackbarVisuals(
                            message = e.message,
                            actionLabel = e.actionLabel,
                            duration = e.duration,
                            type = e.type
                        )
                    )
                    if (result == SnackbarResult.ActionPerformed) {
                        when (e.action) {
                            is SnackAction.RetryCreateBet -> groupViewModel.retryCreateBet(
                                e.action.data
                            )

                            is SnackAction.RetryUpdateStake -> groupViewModel.retrySetStake(
                                e.action.data
                            )

                            is SnackAction.RetryCloseBet -> groupViewModel.retryCloseBet(
                                e.action.data
                            )

                            is SnackAction.RetrySelectWinningChoice -> groupViewModel.retrySelectWinningChoice(
                                e.action.data
                            )

                            null -> Unit
                        }
                    }
                }
            }
        }
    }

    Scaffold(
        modifier = Modifier.fillMaxSize(),
        topBar = {
            CenterAlignedTopAppBar(
                colors = topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primary,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary,

                    ),
                modifier = Modifier
                    .shadow(elevation = 4.dp),
                title = {
                    Text(
                        "Group: ${userState.groupPin}",
                        maxLines = 1,
                        overflow = TextOverflow.MiddleEllipsis
                    )
                },
                actions = {
                    IconButton(onClick = {
                        groupViewModel.copyGroupId(
                            clipboard,
                            userState.groupPin
                        )
                    }) {
                        Icon(
                            painter = painterResource(R.drawable.content_copy_24dp_000000_fill0_wght300_grad0_opsz24),
                            contentDescription = stringResource(id = R.string.copy_group_pin_description),
                            tint = MaterialTheme.colorScheme.onPrimary,
                        )
                    }
                }
                //TODO: add functional back button by handling rejoin manually?
                /*
                navigationIcon = {
                    IconButton(onClick = { /* doSomething() */ }) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = stringResource(id = R.string.backAction_description),
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                    }

                },
                //TODO: add close/remove bet via burger menu?
                //TODO: add leave group menu option?
                actions = {
                    IconButton(onClick = { /* doSomething() */ }) {
                        Icon(
                            imageVector = Icons.Filled.Menu,
                            contentDescription = stringResource(id = R.string.menu_description),
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                    }
                },*/
            )
        },
        floatingActionButton = {
            CreateBetFab(onBetCreated = { betData ->
                groupViewModel.createBet(betData)
            })
        },
        snackbarHost = {
            AppSnackbarHost(
                snackbarHostState,
                modifier = Modifier
                    .imePadding()
                    .navigationBarsPadding()
            )
        },
        content = { innerPadding ->
            val fabPad = 72.dp
            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding),
                contentPadding = PaddingValues(16.dp, top = 12.dp, bottom = 12.dp + fabPad),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(betState) { bet ->
                    BetCardv2(
                        userState.userId,
                        bet,
                        onChoiceClick = { betStake ->
                            groupViewModel.updateStake(betStake)
                        },
                        onBetClose = { groupViewModel.closeBet(it) },
                        onWinningChoice = {
                            groupViewModel.selectWinningChoice(it)
                        }
                    )

                }
            }

        }
    )
}

@SuppressLint("ViewModelConstructorInComposable")
@Preview(showBackground = true, name = "GroupScreen", uiMode = UI_MODE_NIGHT_YES)
@Composable
fun GroupScreenPreview() {
    val s = SavedStateHandle()
    s["userId"] = "0"
    //val viewModel = GroupViewModel(s, provideSocket)
    BetchaTheme {
        GroupScreen(
            modifier = Modifier,
            navController = rememberNavController(),
            //sessionViewModel = SessionViewModel(SessionManager())
            //userId = "0",
            //groupViewModel = GroupViewModel(SessionState())
        )
    }
}