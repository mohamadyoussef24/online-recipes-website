<?php

use App\Http\Controllers\RecipeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


    Route::post('logout' , [AuthController::class , 'logout']);
    Route::post('refresh' , [AuthController::class , 'refresh']);
    Route::post('login' , [AuthController::class , 'login']);
    Route::post('register' , [AuthController::class , 'register']);
   
   
    Route::get('/recipes' , [RecipeController::class , 'index']);
    Route::post('/recipes' , [RecipeController::class , 'store']);
    Route::get('/recipes/{recipe}' , [RecipeController::class , 'show']);

       
   // Route::get('/recipes/search/{recipe}', [RecipeController::class , 'search']);
    Route::get('/recipes/search/{recipe}', [RecipeController::class , 'searchh']);
    

    Route::post('/recipes/{recipe}/like' , [RecipeController::class , 'like']);
    
    Route::post('/recipes/{recipe}/comment', [RecipeController::class , 'comment']);

