<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdvisoryController extends Controller
{
    function announcements() {
        return Inertia::render('Advisory/announcements');
    }

    function events() {
        return Inertia::render('Advisory/events');
    }
}
