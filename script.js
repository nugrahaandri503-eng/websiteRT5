// Mengambil data dari variabel dataKT di file data.js
document.getElementById('org-nama').textContent = dataKT.organisasi.nama;
document.getElementById('org-slogan').innerHTML = dataKT.organisasi.slogan;
document.getElementById('org-ket').textContent = dataKT.organisasi.keterangan;
document.getElementById('pesan-teks').textContent = dataKT.pesan_solidaritas.teks;

// Bagian ini sudah diubah menggunakan innerHTML agar highlight <b> berfungsi
document.getElementById('tentang-teks').innerHTML = dataKT.tentang;

document.getElementById('visi-teks').textContent = dataKT.arah_gerak.visi;

const misiList = document.getElementById('misi-list');
dataKT.arah_gerak.misi.forEach(misi => {
    const li = document.createElement('li');
    li.textContent = misi;
    misiList.appendChild(li);
});

document.getElementById('link-masukan').href = dataKT.kontak.link_form;
document.getElementById('tahun-copyright').textContent = dataKT.kontak.tahun_copyright;
document.getElementById('footer-nama').textContent = `${dataKT.organisasi.nama} ${dataKT.organisasi.keterangan}`;

// Animasi Scroll (Smooth Reveal & Auto-Repeat)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 30; // Koordinat jarak elemen memicu animasi

        // Jika elemen masuk ke dalam area layar (Munculkan animasi)
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } 
        // JIKA ELEMEN KELUAR DARI LAYAR (Reset animasi agar bisa diulang)
        else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();
