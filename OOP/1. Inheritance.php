<?php 

class Produk{
	public 	$judul,
			$penulis,
			$penerbit,
			$harga;

	public function __construct ($judul,$penulis,$penerbit,$harga) {
		$this->judul = $judul;
		$this->penulis = $penulis;
		$this->penerbit = $penerbit;
		$this->harga = $harga;
	}

	public function infolengkap(){
		echo "{$this->judul} | {$this->penulis}, {$this->penerbit} - (Rp {$this->harga})";
	}
}

class Komik extends Produk{
	public 	$jmlhalaman;

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
	public $wktmain;

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
$produk1->infolengkap();
echo '<br>';

$produk2 = new Game('Uncharted','Dutchman','Sony Computer',250000,50);
$produk2->infolengkap();

// Method dan Property yang lebih dulu dipanggil adalah yang berada pada class child, baru ke kelas parent jika penamaannya sama
// Untuk memanggil method dan property yang ada pada parent dapat menggunakan mekanisme overiding dengan syntax parent::