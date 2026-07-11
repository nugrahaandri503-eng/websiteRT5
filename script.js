// Tidak perlu fetch() lagi, langsung ambil dari variabel dataKT di data.js
document.getElementById('org-nama').textContent = dataKT.organisasi.nama;
document.getElementById('org-slogan').innerHTML = `<i class="fas fa-star" style="font-size: 10px;"></i> ${dataKT.organisasi.slogan} <i class="fas fa-star" style="font-size: 10px;"></i>`;
document.getElementById('org-ket').textContent = dataKT.organisasi.keterangan;
document.getElementById('pesan-teks').textContent = dataKT.pesan_solidaritas.teks;
document.getElementById('tentang-teks').textContent = dataKT.tentang;
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

// Animasi Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 30;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();