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
            'position' => 'required|string|max:250',
            'department' => 'required|string|max:250'
        ]);

        Account::create($request->all());
        return redirect()->route('users_index')->with('message', 'Employee Account created successfully');
    }

    public function edit(Account $account)
    {
        return Inertia::render('Users/Edit', ['accounts' => $account]);
    }

    public function update(Request $request, Account $account){
         $request->validate([
            'fullname' => 'required|string|max:250',
            'email' => 'required|email|max:250',
            'position' => 'required|string|max:250',
            'department' => 'required|string|max:250'
        ]);

        $account->update([
            'fullname' => $request->input('fullname'),
            'email' => $request->input('email'),
            'position' => $request->input('position'),
            'department' => $request->input('department'),
        ]);

        return redirect()->route('users_index')->with('message', "Employee updated successfully");
    }

    public function destroy(Account $account) {
        $fullname = $account->fullname;
        $account->delete();
        return redirect()->route('users_index')->with('message', "Employee `${fullname}` deleted successfully");
    }
}
