<?php 

require 'App/init.php';
require 'App/Service/Poly.php';

new App\Service\User();
new App\Produk\User();

echo '<br>';
echo '<hr>';

// Mempersingkat syntax
use App\Service\User as SerUser;
use App\Produk\User as ProUser;

new SerUser();
new ProUser();

echo '<br>';
echo '<hr>';

$element = new Fire();
describe($element);