package com.example.betcha.api

import android.util.Log
import dev.icerock.moko.socket.Socket
import dev.icerock.moko.socket.SocketEvent
import dev.icerock.moko.socket.SocketOptions

//@Serializable
//data class JoinGroupPayload(val user_id: String, val group_pin: String) {
//    override fun toString(): String {
//        return
//    }
//}

val socket = Socket(
    endpoint = "http://10.0.2.2:8000/",
    config = SocketOptions(
        queryParams = mapOf(),
        transport = SocketOptions.Transport.DEFAULT
    )
) {
    on(SocketEvent.Connect) {
        println("connect")
    }

    on(SocketEvent.Connecting) {
        println("connecting")
    }

    on(SocketEvent.Disconnect) {
        println("disconnect")
    }

    on(SocketEvent.Error) {
        println("error $it")
    }

    on(SocketEvent.Reconnect) {
        println("reconnect")
    }

    on(SocketEvent.ReconnectAttempt) {
        println("reconnect attempt $it")
    }

    on(SocketEvent.Ping) {
        println("ping")
    }

    on(SocketEvent.Pong) {
        println("pong")
    }

    on("responseJoinGroup") { data: String ->
        //val json = (Json { isLenient = true }).decodeFromString(String.serializer(), data)
        Log.i("SocketIO | responseJoinGroup", data)
    }
}