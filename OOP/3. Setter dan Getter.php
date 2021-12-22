<?php 

class Produk{
	private 	$judul,
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

	// Getter
	public function getjudul(){
		return $this->judul;
	}

	// Setter, dengan menggunakan setter, kita dapat melakukan validasi pada source code
	public function ubahjudul($judul){
		if(!is_string($judul)){
			throw new Exception("Judul harus berupa kalimat");
		}
		else{
			$this->judul = $judul;	
		}
		
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

$produk1 = new Komik('Naruto','Masashi Kishimoto','Shonen Jump',1250000,150);
$produk1->setdiskon(45);
$produk1->ubahjudul("Bleach");
$produk1->infolengkap();

// Hindari mengubah nilai suatu properthy dengan mengakses langsung pada properthy tersebut
// untuk mengakses nilai suatu properthy gunakan mekanisme getter
// Sedangkan untuk menentukkan nilai baru, gunakan mekanisme setter

define(Nama, 'Muhammad Anbia Senggagau');

echo Nama;