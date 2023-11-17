<?php

  namespace Tests\Feature;

  use App\Models\User;
  use Illuminate\Foundation\Testing\RefreshDatabase;
  use Illuminate\Foundation\Testing\WithFaker;
  use Illuminate\Support\Facades\Hash;
  use Tests\TestCase;

  class AuthControllerTest extends TestCase
  {
    use RefreshDatabase;

    protected $user;
    public function setUp():void
    {
      //親クラスのセットアップメソッドを実行する。
      parent::setUp();

      $this->user = User::factory()->create([
        "email" => "user@test.jp",
        "password" => Hash::make('0000'),
      ]);

      User::factory()->count(3)->create();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_test()
    {
      $response = $this->get('/api/test');
      //$response->dump();

      $response->assertStatus(200)
        ->assertJsonCount(4);
    }

    public function test_login()
    {
      $params = [
        'email' => 'user@test.jp',
        'password' => '0000',
      ];

      $response = $this->post('/api/login', $params);
      //$response->dump();

      $response
        ->assertStatus(200)
        ->assertJson(['name' => $this->user->name]);

      $this->assertAuthenticatedAs($this->user);
    }

    public function test_logout()
    {
      $this->actingAs($this->user);

      $response = $this->post('/api/logout');
      //$response->dump();

      $response->assertStatus(200);

      $this->assertGuest();
    }

    public function test_me()
    {
      $this->actingAs($this->user);

      $response = $this->post('/api/me');

      $response
        ->assertStatus(200)
        ->assertJson(['name' => $this->user->name]);
    }
  }
