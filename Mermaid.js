// Simpan definisi grafik dalam variabel konstanta
const flowchartDefinition = `
graph TD
    %% Definisi Node (Simpul)
    Start((Start))
    AksesURL[Akses URL]
    RouteAdmin{Apakah Rute Admin?}
    
    %% Cabang Admin
    PanelAdmin[Tampil Panel Admin]
    CRUD[CRUD Materi/Kuis]
    End((End))

    %% Cabang User/Login
    CekLogin{Apakah Pengguna<br>Sudah Login?}
    HalamanLogin[Tampil Halaman Login]
    ProsesLogin[Proses Login]
    Dashboard[Tampil Halaman Dashboard]

    %% Alur Belajar
    PilihModul[Pilih Modul]
    HalamanMateri[Tampil Halaman Materi<br>Bab & Sub-Bab]
    SelesaiBaca[Selesai Baca]
    HalamanKuis[Tampil Halaman Kuis]
    SubmitKuis[Submit Kuis]
    HalamanHasil[Tampil Halaman Hasil]

    %% Alur Profil/Logout
    AksesProfil[Akses Profil]
    HalamanProfil[Tampil Halaman Profil]
    Logout[Logout]

    %% Koneksi Antar Node
    Start --> AksesURL
    AksesURL --> RouteAdmin

    %% Path Admin (Ya)
    RouteAdmin -- Ya --> PanelAdmin
    PanelAdmin --> CRUD
    CRUD --> End

    %% Path Bukan Admin (Tidak)
    RouteAdmin -- Tidak --> CekLogin

    %% Path Login
    CekLogin -- Tidak --> HalamanLogin
    HalamanLogin --> ProsesLogin
    ProsesLogin --> Dashboard
    CekLogin -- Ya --> Dashboard

    %% Path Dashboard Utama (Belajar)
    Dashboard --> PilihModul
    PilihModul --> HalamanMateri
    HalamanMateri --> SelesaiBaca
    SelesaiBaca --> HalamanKuis
    HalamanKuis --> SubmitKuis
    SubmitKuis --> HalamanHasil
    HalamanHasil --> Dashboard

    %% Path Profil & Logout
    Dashboard --> AksesProfil
    AksesProfil --> HalamanProfil
    HalamanProfil --> Logout
    Logout --> HalamanLogin

    %% Styling agar lebih mudah dibaca
    classDef decision fill:#f9f,stroke:#333,stroke-width:2px;
    classDef process fill:#e1f5fe,stroke:#0277bd,stroke-width:2px;
    classDef display fill:#fff3e0,stroke:#e65100,stroke-width:2px;
    classDef terminator fill:#dcedc8,stroke:#33691e,stroke-width:2px;

    class RouteAdmin,CekLogin decision;
    class AksesURL,CRUD,ProsesLogin,PilihModul,SelesaiBaca,SubmitKuis,AksesProfil,Logout process;
    class PanelAdmin,HalamanLogin,Dashboard,HalamanMateri,HalamanKuis,HalamanHasil,HalamanProfil display;
    class Start,End terminator;
`;

// --- Contoh Cara Render (Jika menggunakan library mermaid.js) ---

// 1. Pastikan Anda memiliki elemen HTML target, misal: <div id="graphDiv"></div>
// 2. Import mermaid (jika menggunakan modul)
import mermaid from 'mermaid';

// 3. Inisialisasi
mermaid.initialize({ startOnLoad: false });

// 4. Render ke dalam elemen
const element = document.getElementById('graphDiv');
if (element) {
    mermaid.render('graphDiv', flowchartDefinition).then((result) => {
        element.innerHTML = result.svg;
    });
}
