<?php

  use App\Http\Controllers\AuthController;
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

  Route::middleware('auth:sanctum')->get('users', function (Request $request) {
    return User::all();
  });
  Route::post('login', [AuthController::class, 'login']);
  Route::post('logout', [AuthController::class, 'logout']);
  Route::post('register', [AuthController::class, 'register']);
  Route::post('me', [AuthController::class, 'getUser']);
  Route::get('test', function () {
    return User::all();
  });