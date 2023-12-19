<?php

namespace app\controllers;

class GoldController extends Controller
{
  public function index()
  {
    $this->view('gold', ['title' => 'Tropikalya Hotéis - Gold Hotel']);
  }
}
