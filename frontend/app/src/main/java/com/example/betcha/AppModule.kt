package com.example.betcha

import com.example.betcha.api.Socket
import com.example.betcha.api.SocketOptions
import com.example.betcha.model.SessionManager
import com.example.betcha.repository.BetRepository
import com.example.betcha.repository.BetRepositoryImpl
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton


@Module
@InstallIn(SingletonComponent::class)
object AppModule {

    @Provides
    @Singleton
    fun provideBetRepository(
        socket: Socket, sessionManager: SessionManager
    ): BetRepository {
        return BetRepositoryImpl(socket, sessionManager)
    }

    @Provides
    @Singleton
    fun provideSocket(options: SocketOptions): Socket {
        return Socket(
            endpoint = "http://10.0.2.2:8000/",
            config = options
        )

    }

    @Provides
    fun provideSocketOptions(): SocketOptions {
        return SocketOptions(
            queryParams = mapOf(),
            transport = SocketOptions.Transport.DEFAULT
        )
    }

}