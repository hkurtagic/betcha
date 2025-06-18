package com.example.betcha

import com.example.betcha.api.BetRepository
import com.example.betcha.api.BetRepositoryImpl
import com.example.betcha.api.Socket
import com.example.betcha.api.SocketEventRegistry
import com.example.betcha.api.SocketOptions
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent

//@Module
//@InstallIn(SingletonComponent::class)
//object SocketModule {
//
//    @Provides
//    @Singleton
//    fun provideSocket(eventRegistry: SocketEventRegistry): Socket {
//        return Socket(
//            endpoint = "http://10.0.2.2:8000/",
//            config = SocketOptions(
//                queryParams = mapOf(),
//                transport = SocketOptions.Transport.DEFAULT
//            )
//        )
////        return Socket(
////            endpoint = "http://10.0.2.2:8000/",
////            config = SocketOptions(
////                queryParams = mapOf(),
////                transport = SocketOptions.Transport.DEFAULT
////            )
////        ) {
////            on(SocketEvent.Connect) {
////                println("connect")
////            }
////
////            on(SocketEvent.Connecting) {
////                println("connecting")
////            }
////
////            on(SocketEvent.Disconnect) {
////                println("disconnect")
////            }
////
////            on(SocketEvent.Error) {
////                println("error $it")
////            }
////
////            on(SocketEvent.Reconnect) {
////                println("reconnect")
////            }
////
////            on(SocketEvent.ReconnectAttempt) {
////                println("reconnect attempt $it")
////            }
////
////            on(SocketEvent.Ping) {
////                println("ping")
////            }
////
////            on(SocketEvent.Pong) {
////                println("pong")
////            }
////
////            on("responseJoinGroup") { data: String ->
////                //val json = (Json { isLenient = true }).decodeFromString(String.serializer(), data)
////                Log.i("SocketIO | responseJoinGroup", data)
////            }
////            on("bet_update") { message ->
////                try {
////                    val bets = Json.decodeFromString<List<Bet>>(message)
////                    SocketEventRegistry().onBetUpdate?.invoke(bets)
////                } catch (e: Exception) {
////                    Log.e("Socket", "Failed to parse bet_update", e)
////                }
////            }
////        }.apply {
////            connect()
////        }
//    }
//
//    @Provides
//    @Singleton
//    fun provideSocketEventRegistry(): SocketEventRegistry = SocketEventRegistry()
//}

@Module
@InstallIn(SingletonComponent::class)
object AppModule {

//    @Provides
//    @Singleton
//    fun provideUserState(): SessionState = SessionState()


    @Provides
    //@Singleton
    fun provideBetRepository(socket: Socket, eventRegistry: SocketEventRegistry): BetRepository {
        return BetRepositoryImpl(socket, eventRegistry)
    }

    @Provides
    //@Singleton
    fun provideSocket(eventRegistry: SocketEventRegistry): Socket {
        return Socket(
            endpoint = "http://10.0.2.2:8000/",
            config = SocketOptions(
                queryParams = mapOf(),
                transport = SocketOptions.Transport.DEFAULT
            )
        )
//        return Socket(
//            endpoint = "http://10.0.2.2:8000/",
//            config = SocketOptions(
//                queryParams = mapOf(),
//                transport = SocketOptions.Transport.DEFAULT
//            )
//        ) {
//            on(SocketEvent.Connect) {
//                println("connect")
//            }
//
//            on(SocketEvent.Connecting) {
//                println("connecting")
//            }
//
//            on(SocketEvent.Disconnect) {
//                println("disconnect")
//            }
//
//            on(SocketEvent.Error) {
//                println("error $it")
//            }
//
//            on(SocketEvent.Reconnect) {
//                println("reconnect")
//            }
//
//            on(SocketEvent.ReconnectAttempt) {
//                println("reconnect attempt $it")
//            }
//
//            on(SocketEvent.Ping) {
//                println("ping")
//            }
//
//            on(SocketEvent.Pong) {
//                println("pong")
//            }
//
//            on("responseJoinGroup") { data: String ->
//                //val json = (Json { isLenient = true }).decodeFromString(String.serializer(), data)
//                Log.i("SocketIO | responseJoinGroup", data)
//            }
//            on("bet_update") { message ->
//                try {
//                    val bets = Json.decodeFromString<List<Bet>>(message)
//                    SocketEventRegistry().onBetUpdate?.invoke(bets)
//                } catch (e: Exception) {
//                    Log.e("Socket", "Failed to parse bet_update", e)
//                }
//            }
//        }.apply {
//            connect()
//        }
    }


    @Provides
    //@Singleton
    fun provideSocketEventRegistry(): SocketEventRegistry = SocketEventRegistry()

}