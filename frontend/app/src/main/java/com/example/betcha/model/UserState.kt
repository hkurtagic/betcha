package com.example.betcha.model

import com.example.betcha.api.ApiUser


data class UserState(
    var userId: String = "",
    var userName: String = "",
    var groupPin: String = ""
) {
    fun fromApiUser(user: ApiUser): UserState {
        userId = user.user_id
        userName = user.name
        groupPin = user.groupPin
        return this
    }

    fun toApiUser(user: ApiUser): ApiUser {
        return ApiUser(userId, userName, groupPin)
    }
}