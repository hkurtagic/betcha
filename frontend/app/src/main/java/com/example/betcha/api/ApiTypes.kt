package com.example.betcha.api

data class ApiUser(
    var user_id: String,
    var name: String,
    var groupPin: String,
    var token: String?
)

data class ApiNewUser(
    var user_name: String,
    var group_pin: String
)