MEMOIZATION

# Intro
Dynamic Programming adalah salah satu teknik perancangan algoritma yang dikembangkan untuk menyelesaikan permasalahan yang sangat kompleks dengan cara memecah permasalahan tersebut menjadi banyak sub-masalah. Dalam Dynamic Programming, kita menggunakan kembali hasil kalkulasi sub-masalah yang telah dilakukan sebelumnya.

Ada 2 pattern yang paling sering digunakan, Tabulation (atau Bottom Up) dan Memoization (atau Top Down). Hari, ini kita akan membahas salah satunya, yaitu Memoization.

<br>

# DEFINISI
Memoization adalah teknik penyelesaian masalah dengan cara memecah masalah menjadi sub-masalah, menyelesaikan sub-masalah, kemudian menyimpan hasil penyelesaian sub-masalah untuk digunakan kembali jika terdapat sub-masalah yang identik. Disebut Top Down karena sub-masalah akan dipecah dan dicari solusinya mulai dari inti masalah itu sendiri, dan secara rekursif akan menyelesaikan sub-masalah yang lebih kecil.

<br>

# Gimana cara kerjanya?
Bahasa wikinya gini. Gampangnya sih gini, masalah dipecah jadi sub-masalah yang lebih kecil, diselesaikan, lalu bikin memo terkait hasil penyelesaian sub-masalah tersebut. Kenapa harus ada memo? Supaya nanti kalau ada sub-masalah yang sama, bisa kita pakai lagi hasil penyelesaiannya, ga perlu mengulang dari awal.

<br>

# Timeline
Kita coba simulasikan contoh masalah dalam bentuk timeline.
Pertama, kita memiliki sebuah masalah, yaitu menghitung angka Fibonacci dari 5.

Dengan metode Memoization, kita akan mengerjakan dari atas, yaitu dari Fib(5). Untuk mendapatkan hasil Fib(5), kita harus menjumlahkan hasil dari Fib(4) dan hasil dari Fib(3). Oleh karena itu, masalah akan dipecah menjadi 2, yaitu mencari Fib(4) dan mencari Fib(3)

Dari kedua masalah tersebut, kita akan mengambil masalah yang paling mendekati pokok masalah, yaitu mencari Fib(4). Untuk mencari Fib(4), kita harus memecah masalah menjadi 2, yaitu mencari Fib(3) dan mencari Fib(2).

Secara rekursif, metode yang sama berulang kembali. Kita akan mencari Fib(3) dengan cara memecah masalah menjadi 2, yaitu mencari Fib(2) dan mencari Fib(1).

Untuk mencari Fib(2), kita harus memecah masalah menjadi 2, yaitu mencari Fib(1) dan Fib(0).

Karena kita sudah menyentuh Fib(0), maka Ini adalah titik terdalam yang bisa kita capai. Kita akan mulai mencari hasilnya, dimana Fib(1) sudah pasti bernilai 1 dan Fib(0) sudah pasti bernilai 0. Nilai tersebut akan kita simpan ke dalam memo, dan kita kembalikan value tersebut sebagai output.

Saat ini ada 2 memo yang tercatat, yaitu hasil dari Fib(0) dan hasil dari Fib(1).

Sekarang, kita melangkah ke atas, yaitu mencari Fib(2) dan Fib(1). Hasil dari Fib(1) sudah tersimpan di memo, sehingga kita bisa langsung ambil valuenya. Sedangkan hasil dari Fib(2) belum ada di Memo, sehingga harus kita hitung dengan cara menjumlahkan Fib(1) dan Fib(0). Hasil dari penjumlahan tersebut akan kita simpan ke dalam memo, dan kita kembalikan value tersebut sebagai output.

Saat ini ada 3 memo yang tercatat, yaitu hasil dari Fib(0), Fib(1), dan hasil dari Fib(2) yg baru saja ditambahkan.

Kita melangkah ke atas lagi, yaitu mencari Fib(3) dan Fib(2). Hasil dari Fib(2) sudah tersimpan di memo, sehingga yg perlu dicari hanya hasil dari Fib(3). Untuk mencari hasil dari Fib(3), kita tinggal ambil value dari Fib(2) dam value dari Fib(1) kemudian jumlahkan kedua value tersebut. Hasil dari penjumlahan tersebut akan kita simpan ke dalam memo, dan kita kembalikan value tersebut sebagai output.

Saat ini ada 4 memo yang tercatat, yaitu hasil dari Fib(0), Fib(1), Fib(2), dan hasil dari Fib(3) yg baru saja ditambahkan.

Begitu seterusnya, hingga kita mendapatkan hasil dari Fib(5).