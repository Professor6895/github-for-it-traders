<?php

namespace Jed\Dataimport\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;

class DataImportController extends Controller
{
  public function getImportModules()
  {
    $import_modules = config('app.dataimports');
    return response()->json(['success' => true, 'data' => $import_modules]);
  }
}
