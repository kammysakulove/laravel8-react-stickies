<?php

  namespace App\Http\Controllers;

  use App\Models\User;
  use http\Env\Response;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Hash;
  use Illuminate\Support\Facades\Validator;

  class UsersController extends Controller
  {
    public function users(Request $request)
    {
      return User::all();
    }
  }
