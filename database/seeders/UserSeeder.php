<?php

  namespace Database\Seeders;

  use DateTime;
  use Illuminate\Database\Seeder;
  use App\Models\User;
  use Illuminate\Support\Facades\DB;
  use Illuminate\Support\Facades\Hash;
  use Illuminate\Support\Facades\Schema;

  class UserSeeder extends Seeder
  {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Schema::disableForeignKeyConstraints();
      DB::table('users')->truncate();

      DB::table('users')->insert([
        [
          'name' => "山田太郎",
          'email' => 'user1@test.jp',
          'password' => Hash::make('1111'),
          'created_at' => new DateTime(),
        ],
        [
          'name' => "佐藤一郎",
          'email' => 'user2@test.jp',
          'password' => Hash::make('2222'),
          'created_at' => new DateTime(),
        ],
        [
          'name' => "鈴木花子",
          'email' => 'user3@test.jp',
          'password' => Hash::make('3333'),
          'created_at' => new DateTime(),
        ],
        [
          'name' => "田中美咲",
          'email' => 'user4@test.jp',
          'password' => Hash::make('4444'),
          'created_at' => new DateTime(),
        ],
        [
          'name' => "高橋五郎",
          'email' => 'user5@test.jp',
          'password' => Hash::make('5555'),
          'created_at' => new DateTime(),
        ],
      ]);
    }
  }
