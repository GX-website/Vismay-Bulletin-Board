<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Announcement;

class AdvisoryController extends Controller
{
    public function announcements() {
        $announcements = Announcement::all();
        return Inertia::render('Advisory/announcements');
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string|max:250',
            'startDate' => 'required|date',
            'endDate' => 'required|date|after_or_equal:startDate',
            'description' => 'required|string',
        ]);

        Announcement::create($validated);

        return redirect()
            ->route('advisory_announcements')
            ->with('message', 'Announcement created successfully');

    }

    // function events() {
    //     return Inertia::render('Advisory/events');
    // }
}
