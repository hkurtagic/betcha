package com.example.betcha.model

import com.example.betcha.api.ApiUser
import kotlinx.coroutines.flow.MutableStateFlow
import javax.inject.Inject
import javax.inject.Singleton

data class SessionState(
    var userId: String = "",
    var userName: String = "",
    var groupPin: String = "",
    var token: String? = null
)

@Singleton
class SessionManager @Inject constructor() {
    val sessionState = MutableStateFlow<SessionState>(SessionState())


    fun fromApiUser(user: ApiUser): SessionManager {
        sessionState.value = sessionState.value.copy(
            userId = user.user_id,
            userName = user.name,
            groupPin = user.groupPin,
            token = user.token // if present
        )
        return this
    }

    fun toApiUser(): ApiUser {
        return ApiUser(
            sessionState.value.userId,
            sessionState.value.userName,
            sessionState.value.groupPin,
            sessionState.value.token
        )
    }

    override fun toString(): String {
        return "id: ${sessionState.value.userId} | username: ${sessionState.value.userName} | group: ${sessionState.value.groupPin} | token: ${sessionState.value.token}"
    }
}