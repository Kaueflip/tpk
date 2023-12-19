<?php

namespace app\controllers;

class HomeController extends Controller
{
  public function index()
  {
    $this->view('home', ['title' => 'Tropikalya Hotéis - Página Inicial', 'name' => 'Kauê']);
  }
}
