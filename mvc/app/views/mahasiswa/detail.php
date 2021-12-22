<div class="container mt-5">
<h3>Detail Mahasiswa <?= $data['mhs']['nama'] ?></h3>
	<div class="card" style="width: 25rem;">
  <div class="card-body">
    <h5 class="card-title"><?= $data['mhs']['nama'] ?></h5>
    <h6 class="card-subtitle mb-2 text-muted"><?= $data['mhs']['nim'] ?></h6>
    <p class="card-text"><?= $data['mhs']['email'] ?></p>
    <p class="card-text"><?= $data['mhs']['jurusan'] ?></p>
    <a href="<?= BASEURL ?>/mahasiswa/index" class="card-link">Kembali</a>
  </div>
</div>
</div>