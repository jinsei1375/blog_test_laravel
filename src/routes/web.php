<?php

use App\Http\Controllers\TestController;
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

Route::get('/test', [TestController::class, 'index']);
Route::get('/target-users', [TestController::class, 'targetUsers']);
Route::get('/nulltest', [TestController::class, 'null']);
Route::get('/addmonth', [TestController::class, 'addMonthTest']);
Route::get('/fresh', [TestController::class, 'fresh']);
Route::get('/refresh', [TestController::class, 'refresh']);


require __DIR__.'/auth.php';
