<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Account;

class DepartmentController extends Controller
{
    function finance(Account $account) {
        $account = Account::where('department', 'Finance')->get();
        return Inertia::render('Department/finance', ['accounts' => $account]);
    }

    function digital(Account $account) {
        $account = Account::where('department', 'Digital Sale')->get();
        return Inertia::render('Department/digital', ['accounts' => $account]);
    }
    
    function hr(Account $account) {
        $account = Account::where('department', 'HR')->get();
        return Inertia::render('Department/hr', ['accounts' => $account]);
    }

    function itdepartment(Account $account) {
        $account = Account::where('department', 'IT')->get();
        return Inertia::render('Department/itdepartment', ['accounts' => $account]);
    }
}
