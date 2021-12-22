<?php 

spl_autoload_register(function($class){
	$class = explode('\\', $class);
	$class = end($class);
	require __DIR__ .'/Produk/' . $class . '.php';
});

spl_autoload_register( function($class){
	$class = explode('\\', $class);
	$class = end($class);
	require __DIR__ .'/Service/' . $class . '.php';
});


// require 'Produk/User.php';
// require 'Service/User.php';