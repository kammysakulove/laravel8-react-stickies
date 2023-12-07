<?php

  namespace App\Http\Controllers;

  use App\Models\Sticky;
  use http\Env\Response;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Hash;
  use Illuminate\Support\Facades\Validator;

  class StickiesController extends Controller
  {
    public function getAll(Request $request)
    {
      return Sticky::all();
    }

    public function get(Request $request, $id)
    {
      return Sticky::find($id);
    }

    // 登録
    public function register(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'title' => ['required'],
        'body' => ['required'],
        'to' => ['required'],
      ]);

      if ($validator->fails()) {
        return response()->json($validator->errors()->all(), 422);
      }

      $sticky = Sticky::create([
        'title' => $request->title,
        'body' => $request->body,
        'to' => $request->to,
      ]);

      return response()->json($sticky, 201);
    }
  }
