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
    return view('home');
});

Route::get('/hello', function () {
    return 'Hello World';
});

Route::get('/welcome/{name?}', function ($name = "Juan") {
    return 'Welcome '.$name;
});

Route::get('/add/{num1}/{num2}', function ($num1, $num2) {
    return $num1.' + '.$num2.' = '.($num1 + $num2);
})->where(['num1'=>'[0-9]+', 'num2'=>'[0-9]+']);

Route::get('/mul/{num1}/{num2}', function ($num1, $num2) {
    return $num1.' * '.$num2.' = '.($num1 * $num2);
})->where(['num1'=>'[0-9]+', 'num2'=>'[0-9]+']);

Route::get('/test', 'TestController@test');

Route::get('/test/{name}', 'TestController@testing');

Route::resource('trainers', 'TrainerController');
Route::resource('trainings', 'TrainingController');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
