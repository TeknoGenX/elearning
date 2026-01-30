# Proyek UAS: Aplikasi E-Learning "Fundamentals Code"

Ini adalah dokumentasi untuk proyek Ujian Akhir Semester (UAS) mata kuliah Sistem Media Interaktif. Proyek ini berupa aplikasi web e-learning bernama "Fundamentals Code" yang dibangun menggunakan React untuk mengajarkan konsep-konsep fundamental pemrograman kepada siswa SMK.

## Tautan Aplikasi

- **Aplikasi Live (GitHub Pages):** [https://TeknoGenX.github.io/elearning/](https://TeknoGenX.github.io/elearning/)
- **Panel Admin Guru:** [https://TeknoGenX.github.io/elearning/#/admin](https://TeknoGenX.github.io/elearning/#/admin)

## Cara Menjalankan Secara Lokal

1.  **Clone repository** (jika belum ada):
    ```bash
    git clone https://github.com/TeknoGenX/elearning.git
    cd elearning
    ```
2.  **Install dependensi:**
    ```bash
    npm install
    ```
3.  **Jalankan development server:**
    ```bash
    npm run dev
    ```
4.  Buka [http://localhost:5173](http://localhost:5173) di browser Anda. Untuk akses panel admin, buka `http://localhost:5173/admin`.

---

## DOKUMENTASI PROYEK SESUAI SOAL UAS

### 1. Latar Belakang (Konsep)

Seiring dengan pesatnya perkembangan teknologi digital, penguasaan **logika dan konsep dasar pemrograman** menjadi kompetensi kunci yang sangat dibutuhkan di dunia industri. Siswa Sekolah Menengah Kejuruan (SMK), khususnya pada jurusan seperti Rekayasa Perangkat Lunak (RPL) atau Teknik Komputer dan Jaringan (TKJ), dituntut untuk memiliki pemahaman yang kuat sejak dini. Untuk mengatasi tantangan tersebut, diperlukan sebuah media pembelajaran yang inovatif dan interaktif untuk mengajarkan **prinsip-prinsip universal pemrograman**.

#### a. Tujuan

Tujuan utama dari pengembangan aplikasi ini adalah untuk menyediakan media pembelajaran interaktif yang mengajarkan **konsep-konsep fundamental pemrograman** yang dapat diaplikasikan siswa pada berbagai bahasa pemrograman populer.

- **Mendesain Platform Belajar Konseptual:** Menyajikan materi fundamental secara sistematis, mulai dari **logika algoritma, struktur data (Bab), hingga detail materi (Sub-Bab)**.
- **Meningkatkan Keterlibatan Siswa:** Menciptakan pengalaman belajar yang *engaging* melalui elemen interaktif seperti kuis dan tantangan.
- **Menyediakan Fitur Manajemen Konten:** Memberikan fasilitas bagi pengajar/admin untuk menambah, mengedit, dan mengelola materi pembelajaran serta kuis secara dinamis.

#### b. Manfaat

- **Bagi Siswa:** Meningkatkan pemahaman dan motivasi belajar melalui pendekatan visual dan praktik langsung, serta memberikan fleksibilitas waktu belajar.
- **Bagi Guru/Sekolah:** Menjadi alat bantu ajar yang modern, membantu standarisasi materi, dan mempermudah evaluasi formatif.

---

### 2. Desain

#### a. Flowchart

```
[Start] -> (Akses URL) -> <Apakah Rute Admin?>
<Apakah Rute Admin?> --(Ya)--> [Tampil Panel Admin] -> (CRUD Materi/Kuis) -> [End]
<Apakah Rute Admin?> --(Tidak)--> <Apakah Pengguna Sudah Login?>
<Apakah Pengguna Sudah Login?> --(Tidak)--> [Tampil Halaman Login] -> (Proses Login) -> [Tampil Halaman Dashboard]
<Apakah Pengguna Sudah Login?> --(Ya)--> [Tampil Halaman Dashboard]
[Tampil Halaman Dashboard] -> (Pilih Modul) -> [Tampil Halaman Materi (Bab & Sub-Bab)]
[Tampil Halaman Materi] -> (Selesai Baca) -> [Tampil Halaman Kuis] -> (Submit Kuis) -> [Tampil Halaman Hasil] -> [Tampil Halaman Dashboard]
[Tampil Halaman Dashboard] -> (Akses Profil) -> [Tampil Halaman Profil] -> (Logout) -> [Tampil Halaman Login]
```

#### b. Storyboard

- **Layar Siswa:**
    1.  **Halaman Login:** Form untuk masuk ke aplikasi. Menjadi halaman utama.
    2.  **Halaman Dashboard:** Menampilkan daftar semua modul pembelajaran yang tersedia.
    3.  **Halaman Detail Materi:** Tampilan dua kolom dengan navigasi Bab/Sub-Bab di kiri dan konten materi di kanan.
    4.  **Halaman Kuis:** Menampilkan pertanyaan dan pilihan jawaban.
    5.  **Halaman Hasil Kuis:** Menampilkan skor dan rekapitulasi.
    6.  **Halaman Profil:** Menampilkan data pengguna dan tombol logout.
- **Layar Guru (Admin):**
    1.  **Halaman Panel Admin:** Menampilkan daftar modul dengan opsi "Edit" dan tombol "+ Tambah Modul Baru".
    2.  **Halaman Editor Modul:** Form lengkap untuk membuat/mengedit judul modul, deskripsi, bab, sub-bab, serta pertanyaan dan jawaban kuis.

---

### 3. Material untuk Konten

- **Teks:** Seluruh materi pembelajaran, soal kuis, dan teks antarmuka (UI).
- **Gambar:** Ikon untuk navigasi, status, modul, dan avatar pengguna.
- **Struktur Data:** Objek JavaScript sebagai data *mock* untuk modul, bab, sub-bab, dan kuis.

---

### 4. Hasil Aplikasi (Screenshots)

**(Bagian ini perlu diisi dengan tangkapan layar dari aplikasi yang berjalan)**
- Screenshot Halaman Login.
- Screenshot Halaman Dashboard.
- Screenshot Halaman Detail Materi (dengan navigasi Bab/Sub-Bab).
- Screenshot Halaman Kuis.
- Screenshot Halaman Hasil Kuis.
- Screenshot Halaman Profil Pengguna.
- Screenshot Panel Admin Guru (`.../#/admin`).
- Screenshot Halaman Editor Modul (`.../#/admin/create`).

---

### 5. Hasil Pengujian

**Laporan Evaluasi Aplikasi "FUNDAMENTALS CODE" Menggunakan Metode Blackbox Testing**

| ID Kasus Uji | Modul/Fitur yang Diuji | Skenario Pengujian | Hasil yang Diharapkan | Hasil Aktual | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-001** | Login Siswa | Masuk dengan kredensial yang valid. | Pengguna berhasil login dan diarahkan ke Dashboard. | | |
| **TC-002** | Rute Terlindungi | Mencoba akses `/dashboard` tanpa login. | Pengguna dialihkan kembali ke halaman `/login`. | | |
| **TC-003** | Akses Admin | Mengakses rute `/#/admin` di browser. | Halaman Panel Admin Guru berhasil ditampilkan. | | |
| **TC-004** | Navigasi Materi | Siswa mengklik modul, lalu memilih Bab & Sub-Bab. | Konten materi yang sesuai berhasil ditampilkan. | | |
| **TC-005** | Fungsionalitas Kuis | Siswa mengerjakan kuis dan menyelesaikan. | Halaman hasil menampilkan skor yang benar. | | |
| **TC-006** | Logout | Menekan tombol Logout di halaman Profil. | Pengguna berhasil keluar dan diarahkan ke halaman Login. | | |
| **TC-007** | Pembuatan Materi | Guru membuat modul baru melalui panel admin. | Modul baru muncul di halaman Dashboard siswa. | | |

---

### 6. Presentasi & Demo Aplikasi

**(Bagian ini perlu disiapkan untuk presentasi lisan di depan dosen pengampu)**
- **Pemaparan Materi:** Jelaskan poin 1-5 di atas secara sistematis.
- **Demonstrasi Langsung:** Tunjukkan fungsionalitas aplikasi, baik dari sisi siswa maupun dari sisi admin (guru).

