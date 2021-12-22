<?php 

class ContohStatic{
	public static $angka = 1;

	public static function halo(){
		return "Hallo Dunia " . self::$angka++;
		// ketika menggunakan function static, tidak bisa menggunakan syntax $this untuk mengakses properthy, melainkan harus menggunakan self
	}
}

echo ContohStatic::halo();
echo "<br>";
echo ContohStatic::$angka;
echo "<br>";
echo ContohStatic::halo();
echo "<br>";
echo ContohStatic::$angka;
echo "<br>";

// Attribute static memungkinkan kita untuk dapat memanggil salah satu properthy atau method pada class

echo "<hr>";

class Contoh{
	public static $angka = 1;

	public function halo(){
		return "Hallo " . self::$angka++;
	}
}

$obj = new Contoh;

echo $obj->halo();
echo "<br>";
echo $obj->halo();
echo "<br>";
echo $obj->halo();
echo "<br>";

echo "<br>";

$obj1 = new Contoh;

echo $obj1->halo();
echo "<br>";
echo $obj1->halo();
echo "<br>";
echo $obj1->halo();
echo "<br>";

echo "<hr>";
// pada properthy static, nilainya akan mengikat ke kelas-nya bukan object-nya, sehingga akan terjadi penyimpanan memori pada satu tempat
// mekanisme const mempunyai syntax yang sama dengan static keyword

class Konstanta{
	const UMUR = 25;
}

echo Konstanta::UMUR;

// terdapat beberapa magic constant yang bisa digunakan dan sudah terbuat langsung pada source code PHP contohnya:
// __LINE__ , __DIR__, __FILE__ dst.
