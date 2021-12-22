<div class="container mt-3">
	<div class="row">
		<div class="col-lg-6">
			<?php Flasher::flash(); ?>
		</div>
	</div>

	<div class="row">
		<div class="col-lg-6">
			<!-- Button trigger modal -->
			<button type="button" class="btn btn-primary mb-3 tombolTambahData" data-bs-toggle="modal" data-bs-target="#formModal">
				Tambah Data Mahasiswa
			</button>

			<h3>Daftar Mahasiswa</h3>
			<ul class="list-group mt-3">
				<?php foreach ($data['mhs'] as $mhs) : ?>
					<li class="list-group-item "><?= $mhs['nama']; ?> <a href="<?= BASEURL; ?>/mahasiswa/hapus/<?= $mhs['id']; ?>" class="badge bg-danger float-end ms-2" onclick="return confirm(' Apakah anda yakin ingin menghapus data mahasiswa <?= $mhs['nama']; ?>')">Hapus</a>
						<a href="<?= BASEURL; ?>/mahasiswa/ubah/<?= $mhs['id']; ?>" class="badge bg-warning float-end ms-2 tampilModalUbah" data-bs-toggle="modal" data-bs-target="#formModal" data-id="<?= $mhs['id']; ?>">Edit</a>
						<a href="<?= BASEURL; ?>/mahasiswa/detail/<?= $mhs['id']; ?>" class="badge bg-primary float-end ms-2">Details</a>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>
	</div>
</div>

<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="judulModal" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="formModalLabel">Tambah data Mahasiswa</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<form class="test" action="<?= BASEURL; ?>/mahasiswa/tambah" method="post">
					<input type="hidden" id="id" name="id">
					<div class="mb-3">
						<label for="nama" class="form-label">Nama</label>
						<input type="text" class="form-control" id="nama" name="nama" placeholder="Masukkan Nama">
					</div>
					<div class="mb-3">
						<label for="nim" class="form-label">NIM</label>
						<input type="number" class="form-control" id="nim" name="nim" placeholder="Masukkan NIM">
					</div>
					<div class="mb-3">
						<label for="email" class="form-label">Email</label>
						<input type="email" class="form-control" id="email" name="email" placeholder="Masukkan email">
					</div>
					<label for="jurusan" class="form-label">Jurusan</label>
					<select class="form-select" aria-label="Default select example" id="jurusan" name="jurusan">
						<option selected value="Teknik Mesin">Teknik Mesin </option>
						<option value="Teknik Geofisika">Teknik Geofisika</option>
						<option value="Teknik Elektro">Teknik Elektro</option>
						<option value="Teknik Informatika">Teknik Informatika</option>
						<option value="Teknik Geomatika">Teknik Geomatika</option>
						<option value="Teknik Lingkungan">Teknik Lingkungan</option>
						<option value="Arsitektur">Arsitektur</option>
						<option value="Arsitektur">Matematika</option>

					</select>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="submit" class="btn btn-primary">Tambah Data!</button>
			</div>
			</form>
		</div>
	</div>
</div>