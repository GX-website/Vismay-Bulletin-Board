<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index', []);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request) {
        $request->validated([
            'name' => 'required|string|max:250',
            'email' => 'required|string|max:250',
            'department' => 'required|string|max:250'
        ]);
    }
}
