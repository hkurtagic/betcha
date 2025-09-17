package com.example.betcha.api

import android.util.Log
import dev.icerock.moko.socket.SocketEvent
import io.socket.client.Ack
import io.socket.client.IO
import io.socket.client.Socket
import io.socket.engineio.client.transports.Polling
import io.socket.engineio.client.transports.WebSocket
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonObject
import org.json.JSONArray
import org.json.JSONObject
import javax.inject.Singleton

@Singleton
data class SocketOptions(
    val queryParams: Map<String, String>?,
    val transport: Transport = Transport.DEFAULT
) {
    enum class Transport {
        WEBSOCKET,
        POLLING,
        DEFAULT
    }
}


class Socket(
    endpoint: String,
    config: SocketOptions?
) {
    private val socketIo: Socket

    init {
        socketIo = IO.socket(endpoint, IO.Options().apply {
            transports = config?.transport?.let {
                when (it) {
                    SocketOptions.Transport.DEFAULT -> return@let null
                    SocketOptions.Transport.WEBSOCKET -> return@let arrayOf(WebSocket.NAME)
                    SocketOptions.Transport.POLLING -> return@let arrayOf(Polling.NAME)
                }
            }
            query = config?.queryParams?.run {
                if (size == 0) return@run null

                val params: List<String> = map { (key, value) -> "$key=$value" }
                params.joinToString("&")
            }
        })

        socketIo.on("responseJoinGroup") { data ->
            Log.i("SocketIO | responseJoinGroup", data.toString())
        }
//        socketIo.on("bet_update") { (args) ->
//            try {
//                val bets = Json.decodeFromString<List<Bet>>(args.toString())
//                SocketEventRegistry().onBetUpdate?.invoke(bets)
//            } catch (e: Exception) {
//                Log.e("bet_update", "Failed to parse bet_update", e)
//            }
//        }
    }

    fun emit(event: String, data: String, callback: ((JSONObject) -> Unit)? = null) {
        if (callback != null) {
            socketIo.emit(event, data, Ack {
                val ackData = it[0]
                Log.i("SocketIO | emit String", ackData.toString())
                callback(ackData as JSONObject)
            })
        } else {
            socketIo.emit(event, data)
        }
    }

    fun emit(event: String, data: JsonObject, callback: ((JSONObject) -> Unit)? = null) {
        if (callback != null) {
            socketIo.emit(event, arrayOf(JSONObject(data.toString())), Ack {
                val ackData = it[0]
                Log.i("SocketIO | emit JSONObject", ackData.toString())
                callback(ackData as JSONObject)
            })
        } else {
            socketIo.emit(event, JSONObject(data.toString()))
        }
    }

    fun emit(event: String, data: JsonArray, callback: ((JSONObject) -> Unit)? = null) {
        if (callback != null) {
            socketIo.emit(event, JSONArray(data.toString()), Ack {
                val ackData = it[0]
                Log.i("SocketIO | emit JSONArray",  ackData.toString())
                callback(ackData as JSONObject)
            })
        } else {
            socketIo.emit(event, JSONArray(data.toString()))
        }
    }

    fun connect() {
        socketIo.connect()
    }

    fun disconnect() {
        socketIo.disconnect()
    }

    fun isConnected(): Boolean {
        return socketIo.connected()
    }

    fun on(event: String, action: (message: Any) -> Unit) {
        socketIo.on(event) {
            action(it)
        }
    }

    fun <T> on(
        socketEvent: SocketEvent<T>,
        action: (data: T) -> Unit
    ) {
        socketEvent.socketIoEvents.forEach { event ->
            socketIo.on(event) { data ->
                action(socketEvent.mapper(data))
            }
        }
    }


//    fun addEvent(event: String, function: () -> Unit) {
//        socketIo.on(event, function)
//    }

}