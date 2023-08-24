<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;
use App\Models\Comment;
use App\Models\Like;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::all();
        return response(['recipes' => $recipes]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'cuisine' => 'required|string|max:255',
            'ingredients' => 'required|string',
            'image' => 'nullable|string|' ,
           
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()], 422);
        }

        $user = Auth::user();

        $recipe = new Recipe([
            'name' => $request->name,
            'cuisine' => $request->cuisine,
            'ingredients' => $request->ingredients,
            'image' => $request->image,
        ]);
        $recipe->save();

        

        

        return response(['recipe' => $recipe], 201);
    }

    public function show(Recipe $recipe)
    {
        return response(['recipe' => $recipe]);
    }

    public function search($recipe)
    {
        $foundRecipe = Recipe::find($recipe);

        if ($foundRecipe) {
            return response()->json($foundRecipe);
        } else {
            return response()->json(['error' => 'Recipe not found'], 404);
        }
    }

    public function searchh(Request $request)
    {
        $query = $request->input('name');

        $results = Recipe::where('name', 'like', '%' . $query . '%')->get();

        return response()->json([
            'results' => $results,
        ]);
    }

    

    // public function search(Request $request)
    // {
    //     $query = Recipe::query();

    //     if ($request->has('name')) {
    //         $query->where('name', 'like', '%' . $request->name . '%');
    //     }

    //     if ($request->has('cuisine')) {
    //         $query->where('cuisine', 'like', '%' . $request->cuisine . '%');
    //     }

    //     if ($request->has('ingredients')) {
    //         $query->where('ingredients', 'like', '%' . $request->ingredients . '%');
    //     }

    //     $results = $query->get();

    //     return response(['results' => $results]);
    // }

    public function like(Recipe $recipe)
    {
        $user = Auth::user();

        if ($recipe->likes()->where('user_id', $user->id)->exists()) {
            return response(['message' => 'You already liked this recipe'], 400);
        }

        $like = new Like();
        $like->user_id = $user->id;
        
        $recipe->likes()->save($like);

        return response(['message' => 'Recipe liked']);
    }

    public function comment(Request $request, Recipe $recipe)
    {
        $validator = Validator::make($request->all(), [
            'content' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()], 422);
        }

        $user = Auth::user();

        $comment = new Comment([
            'content' => $request->content,
        ]);

        $comment->user()->associate($user);
        $recipe->comments()->save($comment);

        return response(['message' => 'Comment added']);
    }
}

