<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\DepartmentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('/dashboard', function(){
        return Inertia::render('dashboard', [
            'accounts' => \App\Models\Account::all(),
        ]);
    })->name('dashboard');
    Route::get('/users',[UserController::class, 'index'])->name('users_index');
    Route::post('/users', [UserController::class, 'store'])->name('users_store');
    Route::get('/users/create', [UserController::class, 'create'])->name('users_create');
    Route::get('/users/{account}/edit', [UserController::class, 'edit'])->name('users_edit');
    Route::put('/users/{account}', [UserController::class, 'update'])->name('users_update');
    Route::delete('/users/{account}', [UserController::class, 'destroy'])->name('users_destroy');
    Route::get('/department/finance', [DepartmentController::class, 'finance'])
    ->name('department_finance');
    Route::get('/department/digital', [DepartmentController::class, 'digital'])
    ->name('department_digital');
    Route::get('/department/hr', [DepartmentController::class, 'hr'])
    ->name('department_hr');
    Route::get('/department/itdepartment', [DepartmentController::class, 'itdepartment'])
    ->name('department_itdepartment');
});

require __DIR__.'/settings.php';
