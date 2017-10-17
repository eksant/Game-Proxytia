# phase-0.week-2 (Membuat Game Proxytia)
PSEDOCODE: Tampilkan halaman depan dengan input "Nama" dan "Umur" serta tiga karakter hero (Ksatria, Penyihir, dan Tabib). Jika input "Nama" tidak di isi maka Tampilkan pesan "Masukkan Nama Anda !", jika input "Umur" tidak di isi maka tampilkan pesan "Masukkan Umur Anda !". Pilih salah satu karakter hero untuk melanjutkan ke halaman berikutnya.

Di halaman dua, tampilkan karakter hero yang dipilih dengan karakter monster. Tambahkan dua tombol "Home" untuk kembali ke halaman pertama, dan "War" untuk melanjutkan ke halaman berikutnya, dengan variabel : "tahunLahir" adalah tahun sekarang dikurangi dengan "Umur", "playerHealth" dan "monsterHealth" adalah nilai acak dari "tahunLahir", "kodeMonster" adalah pembulatan dari nilai seratus pangkat angka acak, "intUmur" adalah pangkat dari "Umur". Setelah semua variabel terpenuhi, dilakukan perulangan sebanyak "tahunLahir". Didalam perulangan tersebut ada beberapa kondisi : 
1. Jika indeks perulangan adalah kelipatan "Umur" maka kurangi "monsterHealth" dengan "Umur" 
2. Jika indeks perulangan adalah kelipatan "kodeMonster" maka kurangi "playerHealth" dengan "kodeMonster" 
3. Jika indeks perulangan adalah kelipatan "Umur" dan "kodeMonster" sekaligus maka tambahkan "playerHealth" dengan "kodeMonster" dan tambahkan "monsterHealth" dengan "Umur".

Jika "playerHealth" lebih besar dari "monsterHealth" maka tampilkan "Selamat, [Karakter] [Nama] memenangkan pertarungan!", jika sebaliknya maka tampilkan "Sayang sekali, [Karakter] [Nama] dikalahkan monster...". Terakhir tambahkan tombol "Home" untuk kembali ke halaman pertama.
