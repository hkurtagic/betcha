package com.example.betcha.api

import com.example.betcha.model.Bet
import jakarta.inject.Inject
import jakarta.inject.Singleton

@Singleton
class SocketEventRegistry @Inject constructor() {
    var onBetUpdate: ((List<Bet>) -> Unit)? = null
}