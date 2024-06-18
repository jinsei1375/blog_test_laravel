<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

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

    public function targetUsers()
    {
        // whereでの取得
        $targetUsers = User::where('created_at', '2024-03-09')->get();

        // whereDateでの取得
        $targetUsersByWhereDate = User::whereDate('created_at', '2024-03-09')->get();

        // whereDateでの取得
        $targetUsersByWhereBetween = User::whereBetween('created_at', ['2024-03-09 00:00:00', '2024-03-09 23:59:59'])->get();

        if ($targetUsersByWhereDate->isEmpty()) {
            $message = '対象ユーザーいないよ！';
        } else {
            $message = '対象ユーザーいるよ！';
        }

        return view('target-users')
            ->with('message', $message);
    }

    public function null()
    {
        $null = null;
        $empty = '';
        $zero = 0;

        return view('nulltest')
        ->with('null', $null)
        ->with('empty', $empty)
        ->with('zero', $zero);
    }

    public function addMonthTest()
    {
        $date1 = Carbon::parse('2024-06-30');
        $date1->addMonth();

        $date2 = Carbon::parse('2024-01-31');
        $date2->addMonth();
        return view('addmonth')
            ->with('date1', $date1)
            ->with('date2', $date2);
    }
}
