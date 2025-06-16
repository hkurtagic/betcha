package com.example.betcha

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.example.betcha.model.UserState
import com.example.betcha.presentation.GroupScreen
import com.example.betcha.presentation.HomeScreen
import kotlinx.serialization.Serializable

// Define a home route that doesn't take any arguments
@Serializable
object Home

// Define a profile route that takes an ID
@Serializable
data class Group(val userState: UserState)

sealed class Screen(val route: String) {
    data object HomeScreen : Screen(route = "home")
    data object GroupScreen : Screen(route = "group/{userId}") {
        fun createRoute(userId: String): String = "group/$userId"
    }
}

@Composable
fun Navigation() {
    val navController = rememberNavController()
    NavHost(
        navController = navController,
        startDestination = Screen.HomeScreen.route,
        modifier = Modifier
    ) {
        composable(route = Screen.HomeScreen.route) {
            HomeScreen(
                modifier = Modifier,
                navController = navController
            )
        }
        composable(
            route = Screen.GroupScreen.route,
            arguments = listOf(
                navArgument("userId") { type = NavType.StringType },
            )
        ) { backStackEntry ->
            val userId = backStackEntry.arguments?.getString("userId")!!

            GroupScreen(
                modifier = Modifier,
                navController = navController,
                userId = userId
            )

        }
    }
}