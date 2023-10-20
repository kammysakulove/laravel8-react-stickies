<?php

  namespace App\Http\Controllers;

  use http\Env\Response;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;

  class AuthController extends Controller
  {
    public function login(Request $request)
    {
      $user = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required']
      ]);

      if (Auth::attempt($user)) {
        $request->session()->regenerate();

        return response()->json(Auth::user());
      }

      return response()->json([], 401);
    }

    public function logout(Request $request)
    {
      Auth::logout();
      $request->session()->invalidate();
      $request->session()->regenerateToken();

      return response()->json(true);
    }
  }
