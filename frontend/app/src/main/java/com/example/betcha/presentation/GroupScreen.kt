package com.example.betcha.presentation

import android.content.res.Configuration.UI_MODE_NIGHT_YES
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.size
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import com.example.betcha.R
import com.example.betcha.api.socket
import com.example.betcha.model.GroupViewModel
import com.example.betcha.ui.theme.BetchaTheme

@Composable
fun GroupScreen(
    modifier: Modifier,
    navController: NavController,
    userId: String,
    groupViewModel: GroupViewModel = hiltViewModel()
) {
    val userState by groupViewModel.userState.collectAsState()
    LaunchedEffect(userState.groupPin) {
        if (userState.groupPin != "" && !socket.isConnected()) {
            groupViewModel.joinGroupSocket(userState.userId, userState.groupPin)
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
    }
}

@Preview(showBackground = true, name = "GroupScreen", uiMode = UI_MODE_NIGHT_YES)
@Composable
fun GroupScreenPreview() {
    BetchaTheme {
        GroupScreen(
            modifier = Modifier,
            navController = rememberNavController(),
            userId = "0"
        )
    }
}