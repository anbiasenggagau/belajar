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