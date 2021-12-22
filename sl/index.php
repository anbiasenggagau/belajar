<?php
$conn =new mysqli("localhost","root","","video_rental");

$result = $conn->query("SELECT * FROM newtabel");

$i = 0;
while($row = $result->fetch_array()){
	$data [$i]['nama'] = $row[1];
	$data [$i]['alamat'] = $row[2];
	$data [$i]['film'] = $row[3];
	$data [$i]['panggilan'] = $row[4];
	$i++;
}


 ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Test</title>

</head>
<body>
	<h1>Hello</h1>
	<table border="1" cellpadding="10" cellspacing="0">
	<tr>
		<th>Nomor</th>
		<th>Nama</th>
		<th>Alamat</th>
		<th>Film</th>
		<th>Panggilan</th>
	</tr>
	<?php $i = 1 ; foreach ($data as $row) : ?>
	<tr>
		<td><?php echo $i; $i++; ?></td>
		<td><?php echo $row['nama']; ?></td>
		<td><?php echo $row['alamat']; ?></td>
		<td><?php echo $row['film']; ?></td>
		<td><?php echo $row['panggilan']; ?></td>
	</tr>
<?php endforeach; ?>
</table>
</body>
</html>