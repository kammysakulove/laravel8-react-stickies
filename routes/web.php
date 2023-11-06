<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//  Laravelでのキャッチオールルート:
//
//  Laravelのweb.phpルートファイルで、すべての非APIリクエストをReactアプリケーションにリダイレクトするキャッチオールルートを定義します。
//これにより、ReactのルーターがURLを処理することができます。
Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
Route::get('/', function () {
  return view('index');
})->name('login');