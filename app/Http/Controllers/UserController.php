<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Account;

class UserController extends Controller
{
    public function index()
    {
        $accounts = Account::all(); 
        return Inertia::render('Users/Index', compact('accounts'));
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

    public function destroy(Account $accounts) {
        $fullname = $accounts->fullname;
        $accounts->delete();
        return redirect()->route('users_index')->with('message', "Employee `${fullname}` deleted successfully");
    }
}
