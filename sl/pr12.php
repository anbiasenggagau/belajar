<?php 
$conn =new mysqli("localhost","root","","rent");

$result = $conn->query("SELECT * FROM apart1");


$i = 0;
while($row = $result->fetch_array()){
	$data[$i]['nama'] = (string)$row[1];
	$data[$i]['ruang'] = (int)$row[2];
	$data[$i]['tagihan'] = (int)$row[3];
	$data[$i]['tanggal'] = (string)$row[4];
	$i++;
}

 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8">
 	<title>Data pelanggan apartemen 1</title>
 </head>
 <body>
 	<h1>Data Pelanggan Apartemen 1</h1>
 	<a href="tambah.php">
 		<button>Tambah data pelanggan</button>
 	</a><br>
 <table border="1" cellpadding="10" cellspacing="0">
 	<tr>
 		<th>No</th>
 		<th>Nama</th>
 		<th>Nomor Ruangan</th>
 		<th>Jumlah Tagihan</th>
 		<th>Tanggal Penagihan</th>
 	</tr>
 	<?php $i = 1 ; foreach ($data as $row) : ?>
	<tr>
		<td><?php echo $i; $i++; ?></td>
		<td><?php echo $row['nama']; ?></td>
		<td><?php echo $row['ruang']; ?></td>
		<td><?php echo $row['tagihan']; ?></td>
		<td><?php echo $row['tanggal']; ?></td>
	</tr>
<?php endforeach; ?>
 </table>
 </body>
 </html>