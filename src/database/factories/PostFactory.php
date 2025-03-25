<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'content' => $this->faker->sentence(), // ランダムな文章
            'user_id' => rand(1, 1), // ユーザーIDをランダムに設定（1〜10）
        ];
    }
}
