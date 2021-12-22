<?php

class Controller
{
	public function view($view, $data = []){

		require '../app/views/templates/header.php';
		require '../app/views/' . $view . '.php';
		require '../app/views/templates/footer.php';
	}

	public function model($model){

		require '../app/models/' . $model . '.php';

		return new $model;
	}
}
