<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        $today = Carbon::today();
        $threeDaysAgo = $today->addDays(3);

        if ($today->eq($threeDaysAgo)) {
            dd('同じ日付です。');
        } else {
            dd('同じ日付ではありません。');
        }
    }
}
