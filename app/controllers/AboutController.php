<?php

namespace app\controllers;

class AboutController extends Controller
{
    public function index()
    {
        $this->view('about', ['title' => 'About', 'name' => 'Kauê']);
    }
}
