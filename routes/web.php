<?php

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
    return view('public/index');
})->middleware('auth');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/admin-home', 'HomeController@admin_index')->name('admin-home');

//Route::get('/{anypath}', 'HomeController@index')->where('path','.*');


Route::group(['middleware' => ['auth']], function () {
    
    // Category
    Route::post('/add-category', 'CategoryController@add_category');
    Route::get('/category', 'CategoryController@all_category');
    Route::get('/category/{id}', 'CategoryController@delete_category');
    Route::get('/edit-category/{id}', 'CategoryController@edit_category');
    Route::post('/update-category/{id}', 'CategoryController@update_category');

    //post
    Route::get('/post', 'PostController@all_post');
    Route::post('/add-post', 'PostController@save_post');
    Route::get('/delete/{id}', 'PostController@delete_post');
    Route::get('/edit-post/{id}', 'PostController@edit_post');
    Route::post('/update-post/{id}', 'PostController@update_post');

});
//blogpost
Route::get('/blogpost', 'BlogController@get_all_blog_post');