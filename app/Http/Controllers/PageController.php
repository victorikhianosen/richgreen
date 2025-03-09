<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function subsidiaries(){
        return view('pages.subsidiaries');
    }
}
