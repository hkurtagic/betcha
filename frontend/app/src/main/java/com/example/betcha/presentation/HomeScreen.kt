package com.example.betcha.presentation

import android.content.res.Configuration.UI_MODE_NIGHT_YES
import android.util.Log
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import com.example.betcha.R
import com.example.betcha.model.HomeViewModel
import com.example.betcha.ui.theme.BetchaTheme
import kotlinx.coroutines.android.awaitFrame

@Composable
fun HomeScreen(
    navController: NavController,
    modifier: Modifier,
    homeViewModel: HomeViewModel = hiltViewModel()
) {

    val state by homeViewModel.state.collectAsState()
    val focusRequester = remember { FocusRequester() }
    LaunchedEffect(focusRequester) {
        awaitFrame()
        focusRequester.requestFocus()
    }
    val userState by homeViewModel.userState.collectAsState()
    LaunchedEffect(userState.userId) {
        if (userState.userId != "") {
            Log.i("NewUserCompose", userState.toString())
            homeViewModel.navigateToGroup(navController, userState)
        }
    }



    Column(
        modifier = modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,

        ) {

        Image(
            painter = painterResource(id = R.drawable.logo),
            contentDescription = "App Logo",
            modifier = modifier.size(120.dp)
        )
        Text(
            text = "Betcha",
            style = MaterialTheme.typography.headlineLarge,
            fontWeight = FontWeight.Bold,
            color = MaterialTheme.colorScheme.primary
        )
        Spacer(modifier = Modifier.height(36.dp))

        OutlinedTextField(
            state = state.username,
            label = { Text(text = stringResource(R.string.username_label)) },
            modifier = modifier
                .padding(0.dp, 15.dp)
                .focusRequester(focusRequester),
            trailingIcon = {
                IconButton(
                    modifier = modifier,
                    onClick = { homeViewModel.getRandomUsername() }
                ) {
                    Icon(
                        painter = painterResource(R.drawable.shuffle_24dp_black),
                        contentDescription = "Random Username"
                    )
                }
            },
            keyboardOptions = KeyboardOptions(imeAction = ImeAction.Next),
            isError = homeViewModel.usernameError.value != "",
            supportingText = {
                if (homeViewModel.usernameError.value != "") {
                    Text(homeViewModel.usernameError.value)
                }
            }
        )
        OutlinedTextField(
            state = state.groupPIN,
            label = { Text(text = stringResource(R.string.group_pin_label)) },
            modifier = modifier
                .padding(15.dp)
                .focusRequester(focusRequester),
            keyboardOptions = KeyboardOptions(imeAction = ImeAction.Done),
            onKeyboardAction = { performDefaultAction: () -> Unit ->
                homeViewModel.validateInput(navController)
                performDefaultAction()
            },
            isError = homeViewModel.groupPINError.value != "",
            supportingText = {
                if (homeViewModel.groupPINError.value != "") {
                    Text(homeViewModel.groupPINError.value)
                }
            }
        )

        Spacer(modifier = Modifier.height(24.dp))

        Button(
            onClick = {
                homeViewModel.validateInput(navController)
            },
            modifier = Modifier.fillMaxWidth(0.6f),
            shape = MaterialTheme.shapes.medium
        ) {
            Text(text = if (state.groupPIN.text != "") "Join Group" else "Create Group",
            style = MaterialTheme.typography.labelLarge)
            Icon(
                painter = painterResource(R.drawable.play_arrow_24dp_black),
                contentDescription = if (state.groupPIN.text != "") "Join Group" else "Create Group"
            )
        }

        Spacer(modifier = Modifier.height(24.dp))
    }
}

@Preview(showBackground = true, name = "HomeScreen", uiMode = UI_MODE_NIGHT_YES)
@Composable
fun HomeScreenPreview() {
    BetchaTheme {
        HomeScreen(modifier = Modifier, navController = rememberNavController())
    }
}