package com.example.betcha.presentation

import android.annotation.SuppressLint
import android.content.res.Configuration.UI_MODE_NIGHT_YES
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material3.CenterAlignedTopAppBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults.topAppBarColors
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.lifecycle.SavedStateHandle
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import com.example.betcha.R
import com.example.betcha.model.Bet
import com.example.betcha.model.GroupViewModel
import com.example.betcha.ui.theme.BetchaTheme

@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@OptIn(ExperimentalMaterial3Api::class, ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun GroupScreen(
    modifier: Modifier,
    navController: NavController,
    //userId: String,
    groupViewModel: GroupViewModel = hiltViewModel(),
    //sessionViewModel: SessionViewModel
) {
//    val userState by groupViewModel.userState.collectAsState()

    //val session by sessionViewModel.sessionState.collectAsState()
    val userState by groupViewModel.userState.collectAsState()
    val betState by groupViewModel.bets.collectAsState()
    LaunchedEffect(userState.groupPin) {
        if (userState.groupPin != "" && !groupViewModel.socket.isConnected()) {
            groupViewModel.joinGroupSocket(userState.userId, userState.groupPin)
        }
    }
    Scaffold(
        topBar = {
            CenterAlignedTopAppBar(
                colors = topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primary,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary,

                    ),
                modifier = modifier
                    .shadow(elevation = 4.dp),
                title = {
                    Text(
                        "RoomID: ${userState.groupPin}",
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                },
                navigationIcon = {
                    IconButton(onClick = { /* doSomething() */ }) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = stringResource(id = R.string.backAction_description),
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                    }
//                    Icon(
//                        painter = painterResource(R.drawable.arrow_back_24dp_black),
//                        tint = MaterialTheme.colorScheme.onPrimary,
//                        contentDescription = stringResource(id = R.string.backAction_description)
//                    )
                },
                actions = {
                    IconButton(onClick = { /* doSomething() */ }) {
                        Icon(
                            imageVector = Icons.Filled.Menu,
                            contentDescription = stringResource(id = R.string.menu_description),
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                    }
                },
            )
        },
        bottomBar = {
            // TODO: add FAB
        },
        content = { innerPadding ->
            Column(
                modifier = modifier
                    .padding(innerPadding)
//                    .fillMaxSize()
                    .background(MaterialTheme.colorScheme.background)
            ) {
                //TODO: change card to BetCard
                LazyColumn(
                    modifier = Modifier.fillMaxSize(),
                    contentPadding = PaddingValues(vertical = 8.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    items(betState) { bet ->
                        BetCard(
                            Bet(
                                id = bet.id,
                                text = bet.text,
                                isActive = bet.isActive,
                                potSize = bet.potSize,
                                selections = bet.selections,
                                myBet = bet.myBet
                            )
                        ) {}
                    }
                }

            }
            CreateBetFab { betData ->
                betData.groupPin = userState.groupPin
                betData.userId = userState.userId
                groupViewModel.createBet(betData)
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