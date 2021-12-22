<?php

class Mahasiswa_model
{
	private $table = 'mahasiswa';
	private $db;

	public function __construct()
	{

		$this->db = new Database;
	}

	private $mhs = [
		[
			"nama" => "Muhammad Anbia Senggagau",
			"nim" => "13117056",
			"email" => "muhammad." . '13117056' . '@student.itera.ac.id',
			"jurusan" => "Teknik Elektro"
		],
		[
			"nama" => "Andika Pratama",
			"nim" => "14117056",
			"email" => "andika." . '14117056' . '@student.itera.ac.id',
			"jurusan" => "Teknik Informatika"
		],
		[
			"nama" => "Putri Iska Aldina",
			"nim" => "12117056",
			"email" => "putri." . '12117056' . '@student.itera.ac.id',
			"jurusan" => "Teknik Geofisika"
		],
		[
			"nama" => "Shari Julita",
			"nim" => "23117056",
			"email" => "shari." . '23117056' . '@student.itera.ac.id',
			"jurusan" => "Teknik Geomatika"
		]

	];

	public function getAllMahasiswa()
	{

		$this->db->query('SELECT * FROM ' . $this->table . ' ORDER BY nama');
		return $this->db->resultSet();
	}

	public function getMahasiswa($id)
	{
		$this->db->query("SELECT * FROM " . $this->table . " WHERE id=:id");
		$this->db->bind('id', $id);
		return $this->db->single();
	}

	public function tambahDataMahasiswa($data)
	{
		$query = "INSERT INTO mahasiswa (id, nama, nim, email, jurusan) VALUES 
					('', :nama, :nim, :email, :jurusan)";

		$this->db->query($query);
		$this->db->bind('nama', $data['nama']);
		$this->db->bind('nim', $data['nim']);
		$this->db->bind('email', $data['email']);
		$this->db->bind('jurusan', $data['jurusan']);

		$this->db->execute();

		return $this->db->rowCount();

		// return 0;
	}

	public function hapusDataMahasiswa($id)
	{
		$query = "DELETE FROM mahasiswa WHERE id=:id";

		$this->db->query($query);
		$this->db->bind('id', $id);

		$this->db->execute();

		return $this->db->rowCount();

		// return 0;
	}

	public function ubahDataMahasiswa($data)
	{
		$query = "UPDATE mahasiswa SET 
					nama= :nama,
					nim = :nim,
					email = :email,
					jurusan = :jurusan
					WHERE id = :id";

		$this->db->query($query);
		$this->db->bind('nama', $data['nama']);
		$this->db->bind('nim', $data['nim']);
		$this->db->bind('email', $data['email']);
		$this->db->bind('jurusan', $data['jurusan']);
		$this->db->bind('id', $data['id']);

		$this->db->execute();

		return $this->db->rowCount();

		// return 0;
	}
}
