<?php 

class Produk{
	protected 	$judul,
				$penulis,
				$penerbit,
				$harga,
				$diskon = 0;

	protected function __construct ($judul,$penulis,$penerbit,$harga) {
		$this->judul = $judul;
		$this->penulis = $penulis;
		$this->penerbit = $penerbit;
		$this->harga = $harga;
	}

	public function setdiskon($diskon = 0){
		$this->diskon = $diskon/100;
	}

	public function infolengkap(){
		echo "{$this->judul} | {$this->penulis}, {$this->penerbit} - (Rp {$this->getharga()})";
	}

	private function getharga(){
		return $this->harga = $this->harga - $this->harga * $this->diskon;
	}

}

class Komik extends Produk{
	protected 	$jmlhalaman;

	public function __construct ($judul='',$penulis='',$penerbit= '',$harga = 0,$jmlhalaman = 0) {
		parent::__construct($judul,$penulis,$penerbit,$harga);
		$this->jmlhalaman = $jmlhalaman;
	}

	public function infolengkap(){
		parent::infolengkap();
		echo " | Jumlah Halaman = {$this->jmlhalaman}";
	}

}

class Game extends Produk{
	protected $wktmain;

	public function __construct ($judul='',$penulis='',$penerbit= '',$harga = 0,$wktmain = 0) {
		parent::__construct($judul,$penulis,$penerbit,$harga);
		$this->wktmain = $wktmain;
	} 

	public function infolengkap(){
		parent::infolengkap();
		echo " | Waktu Main = {$this->wktmain}";
	}

}

$produk1 = new Komik('Naruto','Masashi Kishimoto','Shonen Jump',50000,150);
$produk1->setdiskon(75);
$produk1->infolengkap();
echo '<br>';

$produk2 = new Game('Uncharted','Dutchman','Sony Computer',250000,50);
$produk2->infolengkap();


// Public = bisa dipakai di mana saja
// Private = bisa dipakai pada class dan turunannya saja (Child's Parent)
// Protected = hanya bisa dipakai pada kelas tertentu saja