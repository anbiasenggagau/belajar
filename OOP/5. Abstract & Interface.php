<?php 

// ABSTRACT

abstract class Buah{

	abstract public function caraMakan();
}

class Mangga extends Buah{

	public function caraMakan(){
		echo "Dikupas lalu dimakan <br>";
	}
}

class Apel extends Buah{

	public function caraMakan(){
		echo "Digigit hingga sampai ditengah <br>";
	}
}

class Durian extends Buah{

	public function caraMakan(){
		echo "Dibuka dengan menghindari duri nya, lalu makan daging buah yang menempel di biji-nya <br>";
	}
}



// kelas abstract adalah suatu kelas yang tidak bisa di-instansiasi melainkan dibuat untuk bertujuan diturunkan kepada child class nya
// kelas abstract minimal mempunyai 1 method abstract untuk menggambarkan method dasar dari kelas abstract tersebut dimana method tersebut akan dimiliki oleh seluruh child class nya
// mekanisme cara pengeksekusi-an dari method abstact akan dilakukan oleh child class nya secara spesifik.

// ====================================================================================================

// INTERFACE

interface Benda{

	public function getBentuk();
	public function getBau();
}


interface Bunga{

	public function getWarna();
}

class Mawar implements Benda, Bunga{

	public function getWarna(){
		echo "Warna Mawar";
	}

	public function getBau(){
		echo "Bau Bunga Mawar";
	}

	public function getBentuk(){
		echo "Bentuk Bunga Mawar";
	}
}

class Melati extends Buah implements Benda, Bunga{

	public function getWarna(){
		echo "Warna Melati";
	}

	public function getBau(){
		echo "Bau Bunga Melati";
	}

	public function getBentuk(){
		echo "Bentuk Bunga Melati";
	}

	public function caraMakan(){
		echo "Nyam Nyam";
	}
}

// hampir sama seperti abstract class, interface hanya sekumpulan method yang dapat diimplementasi method-nya oleh kelas-kelas yang mengimplement interface tersebut. untuk mengimplement kelas tersebut, suatu kelas diwajibkan mempunyai seluruh method yang ada pada interface tersebut (perhatikan contoh diatas), selain itu, seluruh fungsi harus memiliki visibility public. untuk meng-implements suatu interface dapat dilakukan lebih dari 1 interface dan juga dapat dilakukan dengan bersamaan mekanisme inheritance.