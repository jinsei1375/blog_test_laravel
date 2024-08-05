<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use Faker\Guesser\Name;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth', 'checkIpAddress'])->group(function () {
    Route::name('dashboard')
        ->get('/dashboard', function () {
            return view('dashboard');
        });
});

Route::get('/user/{user}/edit', [UserController::class, 'edit'])->name('user.edit');
Route::post('/user/{user}/update', [UserController::class, 'update'])->name('user.update');

Route::get('/test', [TestController::class, 'index']);
Route::get('/target-users', [TestController::class, 'targetUsers']);
Route::get('/nulltest', [TestController::class, 'null']);
Route::get('/addmonth', [TestController::class, 'addMonthTest']);
Route::get('/no-fresh-refresh', [TestController::class, 'noFreshRefresh']);
Route::get('/fresh', [TestController::class, 'fresh']);
Route::get('/refresh', [TestController::class, 'refresh']);

Route::get('/get-post', [TestController::class, 'getPosts']);


require __DIR__.'/auth.php';
