<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


class ArticleController extends Controller
{
    public function index(): JsonResponse
    {
        $articles = Article::with('comments')->get();
        return response()->json($articles);
    }

    public function show(Article $article): JsonResponse
    {
        $article->load('comments');
        return response()->json($article);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $article = Article::create($request->all());
        return response()->json($article, 201);
    }
}
