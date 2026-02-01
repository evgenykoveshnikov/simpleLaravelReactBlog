<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Article::create([
            'title' => 'How to be a good programmer',
            'content' => 'read DOCS, everyday focus work on projects, use POMODORO timer, daily sinc with yourself'
        ]);

        Article::create([
            'title' => 'What to learn React or Vue?',
            'content' => 'I think you need to learn a both, but you need to ask yourself "you need this to take job or for pet projects"'
        ]);

        Article::create([
            'title' => 'Best tips for find job',
            'content' => 'You need to create best CV, applies many and find already a hr contact'
        ]);

    }
}
