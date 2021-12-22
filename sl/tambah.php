<?php 
$conn =new mysqli("localhost","root","","rent");


if(isset($_POST["tambah"])){
if($_POST['nama'] == NULL or $_POST['ruang'] == NULL or $_POST['tagihan'] == NULL or $_POST['tanggal'] == NULL){
	echo "Isi form secara lengkap !";
}

else if(isset($_POST['nama']) and isset($_POST['ruang']) and isset($_POST['tagihan']) and isset($_POST['tanggal']) ){
	$nama = $_POST['nama'];
	$ruang = $_POST['ruang'];
	$tagihan = $_POST['tagihan'];
	$tanggal = $_POST['tanggal'];
	$data = "INSERT INTO apart1 VALUES ('','$nama','$ruang','$tagihan','$tanggal')";
	if($conn->query($data) === True){
		header("Location: pr12.php");
		exit();
	}
}
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8">
 	<title>Tambah Data</title>
 </head>
 <body>
 	<h1>Tambah data pelanggan</h1>

 	<form method="POST">
		<label for="nama">Nama:</label><br>
	  	<input type="text" id="nama" name="nama"><br>
	  	<label for="ruang">Nomor Ruangan:</label><br>
	  	<input type="text" id="ruang" name="ruang"><br>
	  	<label for="tagihan">Jumlah Tagihan:</label><br>
	  	<input type="text" id="tagihan" name="tagihan"><br>
	  	<label for="tanggal">Tanggal Penagihan:</label><br>
	  	<input type="date" id="ruang" name="tanggal"><br>
	  	<button type="submit" name="tambah">OK</button>
 	</form>
 </body>
 </html>