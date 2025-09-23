package com.example.betcha.api

import com.example.betcha.BuildConfig
import okhttp3.OkHttpClient
import java.util.concurrent.TimeUnit


sealed class ApiResult<out T> {
    data object Loading : ApiResult<Nothing>()
    data class Success<out T>(val value: T) : ApiResult<T>()
    data class Error(val message: String) : ApiResult<Nothing>()
    data object NetworkError : ApiResult<Nothing>()
}

var client: OkHttpClient = OkHttpClient.Builder()
    .connectTimeout(5, TimeUnit.SECONDS)
    .writeTimeout(5, TimeUnit.SECONDS)
    .readTimeout(5, TimeUnit.SECONDS)
    .build()

object RetrofitClient {
    private val url: StringBuilder = StringBuilder()
        .append("http://")
        .append(BuildConfig.API_EP)
        .append(":")
        .append(BuildConfig.API_PORT)
    val apiService: BetchaAPI by lazy {
        retrofit2.Retrofit.Builder()
            .baseUrl(url.toString())
            .client(client)
            .addConverterFactory(retrofit2.converter.gson.GsonConverterFactory.create())
            .build()
            .create(BetchaAPI::class.java)
    }
}