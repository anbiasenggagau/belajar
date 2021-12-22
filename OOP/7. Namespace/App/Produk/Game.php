<?php 

class Game extends Produk{
	protected $wktmain;

	public function __construct ($judul='',$penulis='',$penerbit= '',$harga = 0,$wktmain = 0) {
		parent::__construct($judul,$penulis,$penerbit,$harga);
		$this->wktmain = $wktmain;
	} 

	public function infolengkap(){
		parent::infolengkap();
		echo " | Waktu Main = {$this->wktmain} <br>";
	}

}