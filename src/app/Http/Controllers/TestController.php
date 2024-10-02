<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function dashboard()
    {
        $vueData = [
            'message' => 'Hello, Vue from Laravel!',
            'user' => [
                'name' => 'Sample User',
                'email' => 'test@test.com',
                ]
        ];
        return view('dashboard')
            ->with('vueData', $vueData);
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
        $date1->addMonthNoOverflow();

        $date2 = Carbon::parse('2024-01-31');
        $date2->addMonthNoOverflow();

        $date3 = Carbon::parse('2024-02-29');
        $date3->addYear();
        return view('addmonth')
            ->with('date1', $date1)
            ->with('date2', $date2)
            ->with('date3', $date3);
    }

    public function noFreshRefresh()
    {
        $user1 = User::find(1);
        $user2 = User::find(1);
        $user1->name = 'New Name';
        $user1->save();

        return view('no-fresh-refresh')
            ->with('user1Name', $user1->name)
            ->with('user2Name', $user2->name);
    }

    public function fresh()
    {
        $user1 = User::find(1);
        $user2 = User::find(1);
        $user1->name = 'New Name';
        $user1->save();

        $freshUser = $user2->fresh();

        return view('fresh')
            ->with('user1Name', $user1->name)
            ->with('user2Name', $user2->name)
            ->with('freshUserName', $freshUser->name);
    }

    public function refresh()
    {
        $user1 = User::find(1);
        $user2 = User::find(1);
        $user1->name = 'New Name';
        $user1->save();

        $user2->refresh();

        return view('refresh')
            ->with('user1Name', $user1->name)
            ->with('user2Name', $user2->name);
    }

    public function createSample()
    {
        $user = User::create([
            'name' => 'Sample Use4',
            'email' => 'testo25@sample.com',
            'password' => bcrypt('password'),]);

        return $user;
    }

    public function saveSample()
    {
        $user = User::find(1);
        $user->name = 'Updated Nam';
        $savedReturn = $user->save();

        return $savedReturn;
        // $updateedReturn = 1
    }

    public function updateSample()
    {
        // update()を使って全てのユーザーのnameを'Updated Name'に更新
        $updatedReturn = User::where('id', '>', 0)->update(['name' => 'Updated Name']);

        return $updatedReturn;
        // $updateedReturn = 2
    }

    public function deleteSample()
    {
        $deletedReturn = User::where('id', '>', 1)->delete();

        return $deletedReturn;
        // $deletedReturn = 4
    }

    public function updateUserName()
    {
        User::where('id', '>', 0)->update(['name' => 'Updated Name']);
    }

    public function createPosts()
    {
        $user = User::find(1);
        $user->posts()->create([
            'content' => '投稿内容',
        ]);

        return $user->posts;
    }

    public function getPosts()
    {
        $user = User::find(1);
        dd($user->posts()->where('id', 1));

    }

    public function createPostBySave()
    {
        $post = new Post();
        $post->fill([
            'content' => '投稿内容',
            'user_id' => 1,
        ])->save();

        return $post;
    }

    public function createPostByCreate()
    {
        $newPost = Post::create([
            'content' => 'createメソッドで作成',
            'user_id' => 1,
        ]);

        return $newPost;
    }

    public function createPostByInsertOnePost()
    {
        $result = DB::table('posts')->insert([
            'content' => 'insert()による投稿追加',
            'user_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $result;
    }

    public function createPostByInsert()
    {
        $posts = [
            [
                'content' => '最初の投稿',
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => '2番目の投稿',
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => '3番目の投稿',
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        $result = DB::table('posts')->insert($posts);

        return $result;
    }
}
