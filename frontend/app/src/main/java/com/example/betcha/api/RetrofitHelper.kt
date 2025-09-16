package com.example.betcha.api

import com.example.betcha.BuildConfig

sealed class ApiResult<out T> {
    data object Loading : ApiResult<Nothing>()
    data class Success<out T>(val value: T) : ApiResult<T>()
    data class Error(val message: String) : ApiResult<Nothing>()
    data object NetworkError : ApiResult<Nothing>()
}

object RetrofitClient {
    val url: StringBuilder = StringBuilder()
        .append("http://")
        .append(BuildConfig.API_EP)
        .append(":")
        .append(BuildConfig.API_PORT)
    val apiService: BetchaAPI by lazy {
        retrofit2.Retrofit.Builder()
            .baseUrl(url.toString())
            .addConverterFactory(retrofit2.converter.gson.GsonConverterFactory.create())
            .build()
            .create(BetchaAPI::class.java)
    }
}


//class ResponseHandler<out T>(private val response: Response<T>) {
//
//    fun handleResponse(context: Context): T? {
//        if (response.isSuccessful) {
//            when (response.code()) {
//                //returns response what you want
//                200 -> return response.body()
//
//                //returns if call is unauthorized
//                401 -> {
//                    return null
//                }
//
//                //returns if server not responding
//                500 -> {
//                    return null
//                }
//
//                //returns if end-point not found
//                404 -> {
//                    return null
//                }
//
//                //returns if bad gateway
//                502 -> {
//                    return null
//                }
//
//                //return otherwise
//                else -> return null
//            }
//        } else return null
//    }
//}