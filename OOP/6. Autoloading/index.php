<?php 

require 'App/init.php';

$produk1 = new Komik('Naruto','Masashi Kishimoto','Shonen Jump',1250000,150);
$produk1->infolengkap();

$produk1->setdiskon(45);
$produk1->ubahjudul("Bleach");
$produk1->infolengkap();

// auto loading memungkinkan kita untuk dapat memuat seluruh file php tanpa melakukan require file 1-1
// mekanisme ini menggunakan fungsi spl_autoload_register (perhatikan pada file init.php)