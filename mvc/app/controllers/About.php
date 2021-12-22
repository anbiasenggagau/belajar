<?php

class About extends Controller
{
    public function page()
    {   
        $data['judul'] = 'About';
        $this->view('about/page', $data);
    }

    public function index($nama = 'Anbia', $pekerjaan = 'Karyawan')
    {   
        $data['nama'] = $nama;
        $data['pekerjaan'] = $pekerjaan;
        $data['judul'] = 'About';

        $this->view('about/index',$data);
    }
}
