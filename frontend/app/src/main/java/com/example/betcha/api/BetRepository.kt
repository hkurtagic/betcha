package com.example.betcha.api

import android.util.Log
import com.example.betcha.model.Bet
import com.example.betcha.presentation.BetCreationData
import jakarta.inject.Inject
import jakarta.inject.Singleton
import kotlinx.serialization.json.Json

interface BetRepository {
    fun subscribeToBetUpdates(onUpdate: (List<Bet>) -> Unit)
    fun sendNewBet(bet: BetCreationData)
}

@Singleton
class BetRepositoryImpl @Inject constructor(
    private val socket: Socket,
    private val eventRegistry: SocketEventRegistry
) : BetRepository {

    override fun subscribeToBetUpdates(onUpdate: (List<Bet>) -> Unit) {
        eventRegistry.onBetUpdate = onUpdate
    }

    override fun sendNewBet(data: BetCreationData) {
        val json = Json.encodeToString(data)
        socket.emit("create_bet", json) { response ->
            Log.i("socket", response.toString())
        }
    }
}