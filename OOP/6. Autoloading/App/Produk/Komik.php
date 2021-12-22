<?php

class Komik extends Produk{
	protected 	$jmlhalaman;

	public function __construct ($judul='',$penulis='',$penerbit= '',$harga = 0,$jmlhalaman = 0) {
		parent::__construct($judul,$penulis,$penerbit,$harga);
		$this->jmlhalaman = $jmlhalaman;
	}

	public function infolengkap(){
		parent::infolengkap();
		echo " | Jumlah Halaman = {$this->jmlhalaman} <br>";
	}

}