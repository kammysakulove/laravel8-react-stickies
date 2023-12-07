<?php

namespace Database\Seeders;

use App\Models\Sticky;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StickySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('stickies')->truncate();

      Sticky::factory()->count(30)->create();
    }
}
