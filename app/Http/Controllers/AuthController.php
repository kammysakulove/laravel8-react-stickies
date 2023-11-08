<?php

  namespace App\Http\Controllers;

  use App\Models\User;
  use http\Env\Response;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Hash;
  use Illuminate\Support\Facades\Validator;

  class AuthController extends Controller
  {
    public function login(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'email' => ['required', 'email'],
        'password' => ['required']
      ]);

      if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
      }

      $user = $validator->validated();
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

    public function register(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'name' => ['required'],
        'email' => ['required', 'email', 'unique:users,email'],
        'password' => ['required']
      ]);

      if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
      }

      $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ]);

      return response()->json($user);
    }

    public function getUser(Request $request)
    {
      if (Auth::check()) {
        return response()->json(Auth::user());
      }

      return response()->json([], 401);
    }

  }
