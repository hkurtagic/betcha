package com.example.betcha

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.example.betcha.presentation.GroupScreen
import com.example.betcha.presentation.HomeScreen

sealed class Screen(val route: String) {
    data object HomeScreen : Screen(route = "home")
    data object GroupScreen : Screen(route = "group/{userId}") {
        fun createRoute(userId: String): String = "group/$userId"
    }
}

@Composable
fun Navigation() {
    val navController = rememberNavController()
//    val navBackStackEntry = remember(navController) { navController.getBackStackEntry("root") }
    NavHost(
        navController = navController,
        startDestination = Screen.HomeScreen.route,
        modifier = Modifier
    ) {
        composable(route = Screen.HomeScreen.route) {
            HomeScreen(
                modifier = Modifier,
                navController = navController,
                //sessionViewModel = sessionViewModel
            )
        }
        composable(
            route = Screen.GroupScreen.route,
            arguments = listOf(
                navArgument("userId") { type = NavType.StringType },
            )
        ) { //backStackEntry ->
//            val userId = backStackEntry.arguments?.getString("userId")!!
//            val parentEntry = remember(navController) { navController.getBackStackEntry("root") }
//            val sessionViewModel: SessionViewModel = hiltViewModel(parentEntry)
            GroupScreen(
                modifier = Modifier,
                navController = navController,
                //sessionViewModel = sessionViewModel
                //userId = userId
            )

        }
    }
}