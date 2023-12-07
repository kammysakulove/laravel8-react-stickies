<?php


  use App\Models\Sticky;
  use App\Models\User;
  use Illuminate\Foundation\Testing\RefreshDatabase;
  use Illuminate\Foundation\Testing\WithFaker;
  use Illuminate\Support\Facades\Hash;
  use Tests\TestCase;

  class StickiesControllerTest extends TestCase
  {
    use RefreshDatabase;

    public function setUp():void
    {
      //親クラスのセットアップメソッドを実行する。
      parent::setUp();

      User::factory(5)->create();
      Sticky::factory(10)->create();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_getAll()
    {
      $response = $this->get('/api/stickies');

      $response->assertStatus(200)
        ->assertJsonCount(10);
    }

    public function test_get()
    {
      $sticky = Sticky::first();
      $response = $this->get("/api/stickies/{$sticky->id}");

      $response->assertStatus(200)
        ->assertJsonStructure(['id', 'title', 'body', 'to', 'created_at']);
    }

    public function test_post()
    {
      // バリデーションエラー
      $params = [
        'title' => '',
        'body' => '',
        'to' => '',
      ];

      $response = $this->post("/api/stickies", $params );
      $response->assertStatus(422);


      // 正常
      $user_id = User::inRandomOrder()->first()->id;
      $params = [
        'title' => 'test_title',
        'body' => 'test_body',
        'to' => $user_id,
      ];

      $response = $this->post("/api/stickies", $params );
      $id = $response->json('id');
      $response->assertStatus(201)
        ->assertJson(['id' => $id, 'title' => $params['title'], 'body' => $params['body'], 'to' => $params['to']]);

      $this->assertDatabaseHas(Sticky::class, ['id' => $id,'title' => $params['title'],'body' => $params['body'],'to' => $params['to']]);
    }

  }
