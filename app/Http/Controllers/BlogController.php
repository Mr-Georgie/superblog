<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class BlogController extends Controller
{
    public function get_all_blog_post()
    {
        //$category = Category::with('posts')->get();
        //return $category;
        $posts = Post::with('user','category')->orderBy('id','desc')->get();
        return response()->json([
            'posts'=>$posts
        ], 200);
    }
}
