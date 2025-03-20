<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\App\Redirect;

class RedirectController extends Controller
{
    public function index()
    {
        $redirects = Redirect::latest()->get();
        return response()->json(['success' => true, 'data' => $redirects]);
    }


    public function store(Request $request)
    {
        $this->validate($request, [
        'from' => 'required|url',
        'to' => 'required|url',
        ], [
          'to.url' => 'Destination must be a valid URL',
          'from.url' => 'Source must be a valid URL'
        ]);

        Redirect::create([
          'from' => $request->from,
          'to' => $request->to
        ]);

        return response()->json(['success' => true, 'message' => 'Redirect successfully added.']);
    }


    public function update($id, Request $request)
    {
        $this->validate($request, [
        'from' => 'required|url',
        'to' => 'required|url',
        ], [
          'to.url' => 'Destination must be a valid URL',
          'from.url' => 'Source must be a valid URL'
        ]);


        $redirect = Redirect::find($id);
        $redirect->update([
          'from' => $request->from,
          'to' => $request->to
        ]);
        return response()->json(['success' => true, 'message' => 'Redirect successfully updated']);
    }

    public function destroy($id)
    {
        $redirect = Redirect::find($id);
        $redirect->delete();
        return response()->json(['success' => true, 'message' => 'Redirect successfully deleted']);
    }
}
