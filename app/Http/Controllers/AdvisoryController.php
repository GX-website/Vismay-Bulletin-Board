<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Announcement;

class AdvisoryController extends Controller
{
    public function announcements() {
        $announcements = Announcement::orderBy('id', 'desc')->get();
        return Inertia::render('Advisory/announcements', [
            'announcements' => $announcements,
        ]);
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
    
    public function edit(Announcement $announcements)
    {
        return Inertia::render('Advisory/Edit', ['announcements' => $announcements]);
    }

    public function update(Request $request, Announcement $announcements)
    {
        $request->validate([
            'title' => 'required|string|max:250',
            'startDate' =>  'required|date',
            'endDate' => 'required|date',
            'description' => 'required|max:250'
        ]);

        $announcements->update([
            'title' => $request->input('title'),
            'startDate' => $request->input('startDate'),
            'endDate' => $request->input('endDate'),
            'description' => $request->input('description')
        ]);

        return redirect()->route('advisory_announcements')->with('message', "Announcement sucessfully");
    }

    public function destroy(Announcement $announcements) {
        $title = $announcements->title;
        $announcements->delete();
        return redirect()
        ->route('advisory_announcements')
        ->with('message', "Announcement `${title}` deleted successfully");
    }

    // function events() {
    //     return Inertia::render('Advisory/events');
    // }
}
