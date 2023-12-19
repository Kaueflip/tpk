<?php

namespace app\controllers;

class PrimeController extends Controller
{
  public function index()
  {
    $this->view('prime', ['title' => 'Tropikalya Hotéis - Prime Hotel']);
  }
}
