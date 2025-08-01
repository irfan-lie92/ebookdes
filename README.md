bookDes - Platform Pembaca E-book Indonesia

EbookDes adalah aplikasi Next.js yang memungkinkan pengguna untuk membaca e-book dalam format PDF dengan antarmuka yang sepenuhnya berbahasa Indonesia, dilengkapi dengan sistem autentikasi dan panel admin untuk mengelola konten.
🚀 Fitur Utama

    Halaman Utama - Menampilkan daftar e-book dengan gambar sampul, judul, dan tombol login/register yang menonjol
    PDF Reader - Pembaca PDF yang responsif dengan kontrol navigasi halaman dan opsi zoom untuk pengalaman membaca yang nyaman
    Panel Admin - Antarmuka intuitif untuk mengunggah, mengedit, dan menghapus e-book serta file PDF
    Sistem Autentikasi - Menggunakan Supabase Auth dengan opsi login menggunakan email/password
    Rute Dinamis - Halaman detail buku dengan informasi lengkap dan tombol "Baca Sekarang"
    Manajemen Konten - Admin dapat mengelola konten aplikasi seperti judul hero, deskripsi, dan informasi kontak

🛠️ Teknologi yang Digunakan

    Next.js 14 - Framework React dengan App Router
    Supabase - Database dan autentikasi
    Tailwind CSS - Styling
    TypeScript - Type safety
    Radix UI - Komponen UI
    Lucide React - Icons

📋 Prasyarat

    Node.js 18+
    npm atau yarn
    Akun Supabase

⚙️ Instalasi dan Setup
1. Clone Repository

git clone <repository-url>
cd ebookdes

2. Install Dependencies

npm install

3. Setup Environment Variables

Buat file .env.local dan tambahkan variabel berikut:

SUPABASE_PROJECT_ID=your_project_id
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

4. Setup Database

Jalankan migrasi database Supabase:

# Pastikan Supabase CLI terinstall
npx supabase db push

5. Jalankan Aplikasi

npm run dev

Aplikasi akan berjalan di http://localhost:3000
👥 Penggunaan untuk Pengguna
Registrasi dan Login

    Kunjungi halaman utama aplikasi
    Klik tombol "Masuk" atau "Daftar"
    Isi form registrasi dengan email dan password
    Setelah registrasi, login dengan kredensial yang telah dibuat

Membaca E-book

    Setelah login, Anda akan melihat daftar e-book yang tersedia
    Klik pada e-book yang ingin dibaca
    Anda akan diarahkan ke halaman detail e-book
    Klik tombol "Baca Sekarang" untuk membuka PDF reader
    Gunakan kontrol navigasi untuk:
        Pindah halaman (tombol Previous/Next)
        Zoom in/out
        Kembali ke daftar e-book

Navigasi Aplikasi

    Beranda - Daftar e-book yang tersedia
    Buku - Halaman khusus untuk menjelajahi koleksi buku
    Kontak - Informasi kontak dan cara menghubungi admin
    Profil - Pengaturan akun pengguna

👨‍💼 Panduan Admin
Akses Panel Admin

    Login dengan akun admin (email: admin@ebookdes.com)
    Setelah login, klik menu "Dashboard" di navbar
    Anda akan diarahkan ke panel admin

Mengelola E-book
Menambah E-book Baru

    Di dashboard admin, cari bagian "Manajemen E-book"
    Klik tombol "Tambah E-book Baru"
    Isi form dengan informasi berikut:
        Judul e-book
        Deskripsi
        Penulis
        Upload file PDF
        Upload gambar sampul
    Klik "Simpan" untuk menyimpan e-book

Mengedit E-book

    Di daftar e-book admin, klik tombol "Edit" pada e-book yang ingin diubah
    Ubah informasi yang diperlukan
    Klik "Update" untuk menyimpan perubahan

Menghapus E-book

    Di daftar e-book admin, klik tombol "Hapus" pada e-book yang ingin dihapus
    Konfirmasi penghapusan
    E-book akan dihapus dari sistem

Mengelola Konten Aplikasi
Pengaturan Aplikasi

Di dashboard admin, Anda dapat mengelola:

    Nama Aplikasi
        Ubah nama aplikasi yang ditampilkan di header

    Hero Section
        Edit judul utama halaman beranda
        Edit deskripsi hero section

    Fitur Aplikasi
        Edit judul bagian fitur
        Tambah/edit deskripsi fitur

    Informasi Kontak
        Email kontak
        Nomor telepon
        Alamat kantor

    Halaman Tentang
        Edit judul halaman tentang
        Edit deskripsi aplikasi
        Edit misi dan visi

Cara Mengubah Konten

    Di dashboard admin, scroll ke bagian "Pengaturan Aplikasi"
    Klik pada bagian yang ingin diubah
    Edit teks sesuai kebutuhan
    Klik "Simpan Perubahan"
    Perubahan akan langsung terlihat di aplikasi

Mengelola Pengguna

    Di dashboard admin, akses bagian "Manajemen Pengguna"
    Lihat daftar pengguna yang terdaftar
    Anda dapat:
        Melihat detail pengguna
        Menonaktifkan akun pengguna
        Mengubah role pengguna (admin/user)

📊 Database Schema
Tabel Utama

    ebooks - Menyimpan informasi e-book
    page_contents - Menyimpan konten halaman yang dapat diubah admin
    auth.users - Tabel pengguna Supabase
    public.users - Profil pengguna tambahan

🔒 Keamanan

    Autentikasi menggunakan Supabase Auth
    Row Level Security (RLS) untuk proteksi data
    Admin role untuk akses terbatas ke fitur manajemen
    Validasi input pada semua form

🚀 Deployment
Deploy ke Vercel

    Push kode ke repository Git
    Connect repository ke Vercel
    Set environment variables di Vercel dashboard
    Deploy aplikasi

Deploy ke Platform Lain

    Build aplikasi: npm run build
    Start aplikasi: npm start
    Pastikan environment variables sudah diset

🐛 Troubleshooting
Masalah Umum

Error: Supabase connection failed

    Pastikan environment variables sudah benar
    Cek koneksi internet
    Verifikasi URL dan API key Supabase

Error: PDF tidak bisa dibuka

    Pastikan file PDF valid dan tidak corrupt
    Cek ukuran file (maksimal yang diizinkan)
    Pastikan format file adalah PDF

Error: Login gagal

    Cek kredensial email dan password
    Pastikan akun sudah terdaftar
    Cek konfigurasi Supabase Auth

📞 Support

Jika mengalami masalah atau butuh bantuan:

    Email: support@ebookdes.com
    Buat issue di repository GitHub
    Hubungi admin melalui halaman kontak

📝 Lisensi

Aplikasi ini dilisensikan di bawah MIT License
🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

    Fork repository
    Buat branch fitur baru
    Commit perubahan
    Push ke branch
    Buat Pull Request

EbookDes - Platform E-book Indonesia yang Modern dan User-Friendly
EbookDes - Platform Pembaca E-book Indonesia

EbookDes adalah aplikasi Next.js yang memungkinkan pengguna untuk membaca e-book dalam format PDF dengan antarmuka yang sepenuhnya berbahasa Indonesia, dilengkapi dengan sistem autentikasi dan panel admin untuk mengelola konten.
🚀 Fitur Utama

    Halaman Utama - Menampilkan daftar e-book dengan gambar sampul, judul, dan tombol login/register yang menonjol
    PDF Reader - Pembaca PDF yang responsif dengan kontrol navigasi halaman dan opsi zoom untuk pengalaman membaca yang nyaman
    Panel Admin - Antarmuka intuitif untuk mengunggah, mengedit, dan menghapus e-book serta file PDF
    Sistem Autentikasi - Menggunakan Supabase Auth dengan opsi login menggunakan email/password
    Rute Dinamis - Halaman detail buku dengan informasi lengkap dan tombol "Baca Sekarang"
    Manajemen Konten - Admin dapat mengelola konten aplikasi seperti judul hero, deskripsi, dan informasi kontak

🛠️ Teknologi yang Digunakan

    Next.js 14 - Framework React dengan App Router
    Supabase - Database dan autentikasi
    Tailwind CSS - Styling
    TypeScript - Type safety
    Radix UI - Komponen UI
    Lucide React - Icons

📋 Prasyarat

    Node.js 18+
    npm atau yarn
    Akun Supabase

⚙️ Instalasi dan Setup
1. Clone Repository

git clone <repository-url>
cd ebookdes

2. Install Dependencies

npm install

3. Setup Environment Variables

Buat file .env.local dan tambahkan variabel berikut:

SUPABASE_PROJECT_ID=your_project_id
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

4. Setup Database

Jalankan migrasi database Supabase:

# Pastikan Supabase CLI terinstall
npx supabase db push

5. Jalankan Aplikasi

npm run dev

Aplikasi akan berjalan di http://localhost:3000
👥 Penggunaan untuk Pengguna
Registrasi dan Login

    Kunjungi halaman utama aplikasi
    Klik tombol "Masuk" atau "Daftar"
    Isi form registrasi dengan email dan password
    Setelah registrasi, login dengan kredensial yang telah dibuat

Membaca E-book

    Setelah login, Anda akan melihat daftar e-book yang tersedia
    Klik pada e-book yang ingin dibaca
    Anda akan diarahkan ke halaman detail e-book
    Klik tombol "Baca Sekarang" untuk membuka PDF reader
    Gunakan kontrol navigasi untuk:
        Pindah halaman (tombol Previous/Next)
        Zoom in/out
        Kembali ke daftar e-book

Navigasi Aplikasi

    Beranda - Daftar e-book yang tersedia
    Buku - Halaman khusus untuk menjelajahi koleksi buku
    Kontak - Informasi kontak dan cara menghubungi admin
    Profil - Pengaturan akun pengguna

👨‍💼 Panduan Admin
Akses Panel Admin

    Login dengan akun admin (email: admin@ebookdes.com)
    Setelah login, klik menu "Dashboard" di navbar
    Anda akan diarahkan ke panel admin

Mengelola E-book
Menambah E-book Baru

    Di dashboard admin, cari bagian "Manajemen E-book"
    Klik tombol "Tambah E-book Baru"
    Isi form dengan informasi berikut:
        Judul e-book
        Deskripsi
        Penulis
        Upload file PDF
        Upload gambar sampul
    Klik "Simpan" untuk menyimpan e-book

Mengedit E-book

    Di daftar e-book admin, klik tombol "Edit" pada e-book yang ingin diubah
    Ubah informasi yang diperlukan
    Klik "Update" untuk menyimpan perubahan

Menghapus E-book

    Di daftar e-book admin, klik tombol "Hapus" pada e-book yang ingin dihapus
    Konfirmasi penghapusan
    E-book akan dihapus dari sistem

Mengelola Konten Aplikasi
Pengaturan Aplikasi

Di dashboard admin, Anda dapat mengelola:

    Nama Aplikasi
        Ubah nama aplikasi yang ditampilkan di header

    Hero Section
        Edit judul utama halaman beranda
        Edit deskripsi hero section

    Fitur Aplikasi
        Edit judul bagian fitur
        Tambah/edit deskripsi fitur

    Informasi Kontak
        Email kontak
        Nomor telepon
        Alamat kantor

    Halaman Tentang
        Edit judul halaman tentang
        Edit deskripsi aplikasi
        Edit misi dan visi

Cara Mengubah Konten

    Di dashboard admin, scroll ke bagian "Pengaturan Aplikasi"
    Klik pada bagian yang ingin diubah
    Edit teks sesuai kebutuhan
    Klik "Simpan Perubahan"
    Perubahan akan langsung terlihat di aplikasi

Mengelola Pengguna

    Di dashboard admin, akses bagian "Manajemen Pengguna"
    Lihat daftar pengguna yang terdaftar
    Anda dapat:
        Melihat detail pengguna
        Menonaktifkan akun pengguna
        Mengubah role pengguna (admin/user)

📊 Database Schema
Tabel Utama

    ebooks - Menyimpan informasi e-book
    page_contents - Menyimpan konten halaman yang dapat diubah admin
    auth.users - Tabel pengguna Supabase
    public.users - Profil pengguna tambahan

🔒 Keamanan

    Autentikasi menggunakan Supabase Auth
    Row Level Security (RLS) untuk proteksi data
    Admin role untuk akses terbatas ke fitur manajemen
    Validasi input pada semua form

🚀 Deployment
Deploy ke Vercel

    Push kode ke repository Git
    Connect repository ke Vercel
    Set environment variables di Vercel dashboard
    Deploy aplikasi

Deploy ke Platform Lain

    Build aplikasi: npm run build
    Start aplikasi: npm start
    Pastikan environment variables sudah diset

🐛 Troubleshooting
Masalah Umum

Error: Supabase connection failed

    Pastikan environment variables sudah benar
    Cek koneksi internet
    Verifikasi URL dan API key Supabase

Error: PDF tidak bisa dibuka

    Pastikan file PDF valid dan tidak corrupt
    Cek ukuran file (maksimal yang diizinkan)
    Pastikan format file adalah PDF

Error: Login gagal

    Cek kredensial email dan password
    Pastikan akun sudah terdaftar
    Cek konfigurasi Supabase Auth

EbookDes - Platform E-book Indonesia yang Modern dan User-Friendly
