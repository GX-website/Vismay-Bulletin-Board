<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Account;

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
        $request->validate([
            'fullname' => 'required|string|max:250',
            'email' => 'required|email|max:250',
            'department' => 'required|string|max:250'
        ]);

        Account::create($request->all());
        return redirect()->route('users_index')->with('message', 'User Account created successfully');
    }
}
