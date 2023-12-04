<?php


  use App\Models\User;
  use Illuminate\Foundation\Testing\RefreshDatabase;
  use Illuminate\Foundation\Testing\WithFaker;
  use Illuminate\Support\Facades\Hash;
  use Tests\TestCase;

  class UsersControllerTest extends TestCase
  {
    use RefreshDatabase;

    protected $user;
    public function setUp():void
    {
      //親クラスのセットアップメソッドを実行する。
      parent::setUp();

      $this->user = User::factory()->create([
        'name' => '山田太郎',
        'email' => 'user@test.jp',
        'password' => Hash::make('0000'),
      ]);

      User::factory()->count(3)->create();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_users()
    {
      $response = $this->get('/api/users');

      $response->assertStatus(200)
        ->assertJsonCount(4);
    }
  }
