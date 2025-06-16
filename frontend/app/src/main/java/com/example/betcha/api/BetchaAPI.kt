package com.example.betcha.api

import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Headers
import retrofit2.http.POST
import retrofit2.http.Path

interface BetchaAPI {
    @GET("/randomName")
    suspend fun getRandomUsername(): Response<String>

    @POST("/newUser")
    @Headers("Content-Type: application/json")
    suspend fun postNewUser(@Body newUser: ApiNewUser): Response<ApiUser>

    @GET("/user/{id}")
    suspend fun getUser(@Path("id") id: String): Response<ApiUser>
}