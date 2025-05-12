<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/home', function () {
    return view('index');
})->name('home');
Route::get('/about', function () {
    return view('about');
})->name('about');
Route::get('/coffees', function () {
    return view('coffees');
})->name('coffees');
Route::get('/blog', function () {
    return view('blog');
})->name('blog');
Route::get('/contact', function () {
    return view('contact');
})->name('contact');
