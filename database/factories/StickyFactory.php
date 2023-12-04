<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class StickyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
          'title' => $this->faker->sentence(),
          'body' => $this->faker->paragraphs(3,true),
          'to' => User::inRandomOrder()->first()->id,
          'created_at' => $this->faker->dateTimeBetween("-1 week" , now()),
        ];
    }
}
