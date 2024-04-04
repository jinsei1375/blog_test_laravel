<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        $todayCarbonImmuutable = CarbonImmutable::today();
        $threeDaysAgo = $todayCarbonImmuutable->addDays(3);

        // copy()を使う
        $today = Carbon::today();
        $threeDaysAgoByTodayCopy = $today->copy()->addDays(3);

        // if ($todayCarbonImmuutable->eq($threeDaysAgo)) {
        //     dd('同じ日付です。');
        // } else {
        //     dd('同じ日付ではありません。');
        // }

        if ($today->eq($threeDaysAgoByTodayCopy)) {
            dd('copy: 同じ日付です。');
        } else {
            dd('copy: 同じ日付ではありません。');
        }
    }
}
