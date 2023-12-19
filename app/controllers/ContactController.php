<?php

namespace app\controllers;

class ContactController extends Controller
{
    public function index()
    {
        $this->view('contact', ['title' => 'Contact', 'name' => 'Kauê']);
    }
}
