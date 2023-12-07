<?php

  use App\Http\Controllers\AuthController;
  use App\Http\Controllers\StickiesController;
  use App\Http\Controllers\UsersController;
  use App\Models\User;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Route;

  /*
  |--------------------------------------------------------------------------
  | API Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register API routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | is assigned the "api" middleware group. Enjoy building your API!
  |
  */

  Route::middleware('auth:sanctum')->group(function () {
    Route::get('me', [AuthController::class, 'getUser']);
    Route::get('users', [UsersController::class, 'users']);
    Route::get('stickies', [StickiesController::class, 'getAll']);
    Route::post('stickies', [StickiesController::class, 'register']);
    Route::get('stickies/{id}', [StickiesController::class, 'get']);
  });
  Route::post('login', [AuthController::class, 'login']);
  Route::post('logout', [AuthController::class, 'logout']);
  Route::post('register', [AuthController::class, 'register']);
