<?php

use App\Http\Controllers\UserController;
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
    Route::get('/users',[UserController::class, 'index'])->name('users_index');
    Route::post('/users', [UserController::class, 'store'])->name('users_store');
    Route::get('/users/create', [UserController::class, 'create'])->name('users_create');
    Route::delete('/users/{accounts}', [UserController::class, 'destroy'])->name('users_destroy');
});

require __DIR__.'/settings.php';
