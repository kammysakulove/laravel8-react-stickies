<?php

  namespace App\Models;

  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  use Laravel\Sanctum\HasApiTokens;
  use Illuminate\Foundation\Auth\User as Authenticatable;

  class User extends Authenticatable
  {
    use HasApiTokens, HasFactory;

    public $timestamps = false;
    protected $guarded = ['id', 'create_at'];
    protected $hidden = ['password'];
    protected $casts = [
      'create_at' => 'datetime:Y-m-d',
    ];
  }
