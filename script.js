fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('org-nama').textContent = data.organisasi.nama;
        document.getElementById('org-slogan').innerHTML = `<i class="fas fa-star" style="font-size: 10px;"></i> ${data.organisasi.slogan} <i class="fas fa-star" style="font-size: 10px;"></i>`;
        document.getElementById('org-ket').textContent = data.organisasi.keterangan;
        document.getElementById('pesan-teks').textContent = data.pesan_solidaritas.teks;
        document.getElementById('tentang-teks').textContent = data.tentang;
        document.getElementById('visi-teks').textContent = data.arah_gerak.visi;
        
        const misiList = document.getElementById('misi-list');
        data.arah_gerak.misi.forEach(misi => {
            const li = document.createElement('li');
            li.textContent = misi;
            misiList.appendChild(li);
        });

        document.getElementById('link-masukan').href = data.kontak.link_form;
        document.getElementById('tahun-copyright').textContent = data.kontak.tahun_copyright;
        document.getElementById('footer-nama').textContent = `${data.organisasi.nama} ${data.organisasi.keterangan}`;
    })
    .catch(error => {
        console.error('Gagal memuat data:', error);
        document.getElementById('org-nama').textContent = "Gagal memuat data. Pastikan pakai Live Server.";
    });

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