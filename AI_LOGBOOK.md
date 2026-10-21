# Logbook Pemanfaatan AI (Artificial Intelligence)

**Nama Proyek:** PilahSampah - Web Interaktif Edukasi Lingkungan  
**Lokasi Berkas:** Root Repository (`/AI_LOGBOOK.md`)

---

## Tahap 1: Eksplorasi Ide & Perancangan Solusi

- **Prompty/Pertanyaan Utama:**  
  *Ingin membuat website interaktif bertema "Pilah Sampah" dengan desain modern bergaya paper-cut layer / EcoLife dan animasi globe bumi di halaman awal.*

- **Rangkuman Respons AI:**  
  AI menyarankan konsep landing page interaktif dengan fitur simulasi game pilah sampah, edukasi kategori sampah berbasis tab, kalkulator dampak lingkungan, dan konsep visual bernuansa ekologis.

- **Validasi & Modifikasi Mandiri:**  
  *Menyetujui struktur fitur utama, namun mengubah konsep desain hero section agar mengadopsi layout bersih bergaya EcoLife dengan kartu informasi glassmorphism.*

---

## Tahap 2: Penyusunan Kerangka Kode (Scaffolding)

- **Prompty/Pertanyaan Utama:**  
  *Meminta struktur file terpisah `index.html`, `style.css`, dan `script.js` untuk web PilahSampah.*

- **Rangkuman Respons AI:**  
  AI memberikan struktur dasar HTML5 semantik, stylesheet CSS dengan variabel warna kategori sampah, serta logika Javascript dasar untuk interaksi game dan kalkulator dampak.

- **Validasi & Modifikasi Mandiri:**  
  *Menghapus teks deskripsi petunjuk (seperti "Sisa makanan, daun, kayu") pada kotak tempat sampah untuk meningkatkan tantangan permainan.*

---

## Tahap 3: Pemecahan Masalah & Penanganan Galat (Debugging)

- **Prompty/Pertanyaan Utama:**  
  *Animasi bumi 3D mengalami eror/gagal render di lokal browser. Bagian gambar bumi terpotong atau menjadi lingkaran polos.*

- **Rangkuman Respons AI:**  
  AI sempat menyarankan perpindahan ke Three.js dan CSS gradient, namun hasil render lokal kurang simetris dan terpotong.

- **Validasi & Modifikasi Mandiri:**  
  *Mengabaikan pendekatan render 3D JavaScript yang berat dan beralih menggunakan aset video MP4 animasi rotasi bumi lokal (`Assets/Animasi Rotasi Bumi.mp4`) dengan atribut `autoplay loop muted` agar performa web ringan dan dijamin tampil mulus.*

---

## Tahap 4: Refleksi & Penjelasan Kode

- **Pemahaman Fungsi Program:**  
  - `index.html`: Menggunakan elemen `<video>` terstruktur untuk menampilkan aset animasi bumi serta membagi tata letak section secara semantik.
  - `style.css`: Memanfaatkan Flexbox, CSS Grid, variabel CSS, dan `mix-blend-mode: multiply` untuk menyatukan latar video dengan tema web.
  - `script.js`: Mengelola logika permainan pilah sampah (array data, event listener, skor), sistem modal pop-up feedback kesalahan, serta Web Audio API untuk efek suara.

- **Validasi & Modifikasi Mandiri:**  
  *Memastikan seluruh penamaan merek konsisten menggunakan "PilahSampah" dan struktur kode bersih tanpa menyisakan dependensi pustaka luar yang tidak terpakai.*
