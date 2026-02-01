<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $articles = Article::all();

        foreach ($articles as $article) {
            Comment::create([
                'article_id' => $article->id,
                'author_name' => 'Eugene Ka',
                'content' => 'This is a very hot article'
            ]);

            Comment::create([
                'article_id' => $article->id,
                'author_name' => 'PrimeTime',
                'content' => 'i think you need to paywall this content)'
            ]);
        }
    }
}
