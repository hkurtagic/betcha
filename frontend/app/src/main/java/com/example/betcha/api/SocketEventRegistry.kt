package com.example.betcha.api

import com.example.betcha.repository.Bet
import javax.inject.Inject


class SocketEventRegistry @Inject constructor() {
    var onBetUpdate: ((List<Bet>) -> Unit)? = null
}