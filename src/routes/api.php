<?php

use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/create-sample', [TestController::class, 'createSample']);
Route::post('/update-sample', [TestController::class, 'updateSample']);
Route::post('/delete-sample', [TestController::class, 'deleteSample']);

Route::post('/create-post', [TestController::class, 'createPosts']);
Route::get('/get-post', [TestController::class, 'getPosts']);


Route::post('/create-post-by-save', [TestController::class, 'createPostBySave']);
Route::post('/create-post-by-create', [TestController::class, 'createPostByCreate']);
Route::post('/create-post-by-insert-onepost', [TestController::class, 'createPostByInsertOnePost']);
Route::post('/create-post-by-insert', [TestController::class, 'createPostByInsert']);

