<?php 
//memanggil file function.php dari luar script di folder yang sama untuk merapihkan penulisan
require 'function.php';
//membuat variable $mahasiswa yang dibuat dengan melakukan fungsi query di file script 'function.php'
$mahasiswa = query("SELECT * FROM mahasiswa");
// $mahasiswa = query("SELECT * FROM mahasiswa WHERE nim = '13117056'");
// $mahasiswa = query("SELECT * FROM mahasiswa ORDER BY id ASC");
//MENAMPILKAN DATA DI TABLE DENGAN URUTAN TERTENTU
//gunakan fungsi ORDER BY (nama kolom) ASC (untuk terurut secara membesar)/DESC (untuk terurut secara mengecil)
//MENAMPILKAN DATA DENGAN NILAI SPESIFIK
//yaitu dengan memasukkan nilai spesifik di fungsi query

if(isset($_GET["cari"])){
	$mahasiswa = cari($_GET["keyword"]);
}
 ?>

 <!-- 
 CARA MENGHUBUNGKAN MySQL DENGAN PHP
 Ekstensi MySQL 
 Ektensi MySQLi
 PDO (PHP Data Object) = dapat terhubung tidak ke hanya DBM MySQL saja

 untuk memudahkan perbaikan apabila terjadi kesalahan, fungsi syntax disarankan ditulis dengan huruf kapital semua, namun untuk nama database atau nama tabel ditulis dengan huruf kecil semua

 MySQL tidak akan mengabarkan apakah kita sudah terhubung dengan database atau belum sehingga dibuthkan teknik pengecekan yaitu fungsi if mysqli_error. ketika berhasil terhubung, maka MySQL tidak akan mengirimkan pesan apapun, namun jika gagal MySQL akan mengirimkan pesan error (coba diubah nama tabel pada variable $result)

 BEBERAPA CARA UNTUK MENGAMBIL DATA DARI TABEL
 -mysqli_fetch_row() = fungsinya mengambil array numeric
 -mysqli_fetch_assoc() = fungsinya mengambil array assosiative
 -mysqli_fetch_array() = fungsinya mengambil array assosiative atau numeric
 -mysqli_fetch_object() = hanya mengambil object satuan dari tabel denagn menggunakan format "->"
 -->

 <html>
 <head>
 	<title>Halaman Admin</title>
 </head>
 <body>
 
 <h1>Daftar Mahasiswa</h1>
 <form action="" method="get">
 	<input type="text" name="keyword" size="40" autofocus placeholder="Masukkan keyword pencarian.." autocomplete="off">
 		
 	</input>
 	<button type="submit" name="cari">Cari!</button>
 </form>
 <br>
 <a href="tambah1.php">Tambah Data Mahasiswa</a>
 <br><br>

 <table border="1" cellpadding="10" cellspacing="0">
 <tr>
 	<th>No.</th>
 	<th>Aksi</th>
 	<th>Foto Mahasiswa</th>
 	<th>NIM</th>
 	<th>Nama</th>
 	<th>Universitas</th>
 </tr>

<?php $i = 1; foreach ($mahasiswa as $row) : ?> <!-- hindari penggunaan data dari kolom id, karena penentuan id tidak selalu berurutan -->
 <tr>
 	<td><?php echo $i; $i++; ?></td>
 	<td>
 		<a href="ubah.php?id=<?php echo $row["id"]; ?>" onclick="return confirm('Anda yakin ingin mengubah data?')"> Ubah </a> |
 		<a href="hapus.php?id=<?php echo $row["id"]; ?>" onclick="return confirm('Anda Yakin Ingin Menghapus Data?')"> Hapus </a>
 	</td>
 	<td>
 		<img src="../Pertemuan 6/img/<?php echo $row["gambar"]; ?>" width="100px" height="100px" alt="<?php echo $row["nama"]; ?>">
 	</td>
 	<td><?php echo $row["nim"]; ?></td>
 	<td><?php echo $row["nama"]; ?></td>
 	<td><?php echo $row["universitas"]; ?></td>
 </tr>
 <?php endforeach; ?>
 </table>

 </body>
 </html>