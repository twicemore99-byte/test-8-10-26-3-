function bukaUndangan() {

    sessionStorage.setItem("putarMusik", "true");

    window.location.href = "home.html";
}

const parameterURL = new URLSearchParams(window.location.search);
const namaTamu = parameterURL.get("to");

if (namaTamu) {
    document.getElementById("namaTamu").textContent = namaTamu;
}
function tambahKalender() {
    const judul = "The Wedding Of Ruhady Wijaya & Vivien Carlina";
    const tanggalMulai = "20261206T190000";
    const tanggalSelesai = "20261206T200000";

    const urlKalender =
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        "&text=" + encodeURIComponent(judul) +
        "&dates=" + tanggalMulai + "/" + tanggalSelesai;

    window.open(urlKalender, "_blank");
}

// =========================
// ANIMASI MEMPELAI SAAT SCROLL
// =========================

const bagianMempelai = document.querySelector(".mempelai");

if (bagianMempelai) {

    const observerMempelai = new IntersectionObserver(
        function (entries) {

            if (entries[0].isIntersecting) {

                bagianMempelai.classList.add("animasi-aktif");

                observerMempelai.unobserve(bagianMempelai);
            }

        },
        {
            threshold: 0.25
        }
    );

    observerMempelai.observe(bagianMempelai);
}

// =========================
// ANIMASI COUNTDOWN SAAT SCROLL
// =========================

const bagianCountdown = document.querySelector(".countdown");

if (bagianCountdown) {

    const observerCountdown = new IntersectionObserver(
        function (entries) {

            if (entries[0].isIntersecting) {

                bagianCountdown.classList.add("animasi-aktif");

                observerCountdown.unobserve(bagianCountdown);
            }

        },
        {
            threshold: 0.25
        }
    );

    observerCountdown.observe(bagianCountdown);
}

/* ==============================
   ANIMASI SECTION ACARA
   ============================== */

const bagianAcara = document.querySelector(".acara");

if (bagianAcara) {

    const observerAcara = new IntersectionObserver(
        function (entries) {

            if (entries[0].isIntersecting) {

                bagianAcara.classList.add("animasi-aktif");

                observerAcara.unobserve(bagianAcara);
            }

        },
        {
            threshold: 0.15
        }
    );

    observerAcara.observe(bagianAcara);
}

/* ==============================
   GALERI FOTO
   ============================== */

const galeriGrid = document.getElementById("galeriGrid");
const lightbox = document.getElementById("lightbox");
const lightboxFoto = document.getElementById("lightboxFoto");
const lightboxTutup = document.getElementById("lightboxTutup");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let fotoAktif = 0;

const daftarFoto = [];


// Membuat 18 foto
for (let i = 1; i <= 18; i++) {

    daftarFoto.push("galeri" + i + ".jpeg");

    const foto = document.createElement("img");

    foto.src = "galeri" + i + ".jpeg";
    foto.alt = "Galeri foto " + i;
    foto.className = "galeri-foto";

    foto.addEventListener("click", function () {

        fotoAktif = i - 1;

        bukaLightbox();

    });

    galeriGrid.appendChild(foto);
}


// Buka lightbox
function bukaLightbox() {

    lightboxFoto.src = daftarFoto[fotoAktif];

    lightbox.classList.add("aktif");

    document.body.style.overflow = "hidden";
}


// Tutup lightbox
function tutupLightbox() {

    lightbox.classList.remove("aktif");

    document.body.style.overflow = "";
}


// Foto sebelumnya
function fotoSebelumnya() {

    fotoAktif--;

    if (fotoAktif < 0) {
        fotoAktif = daftarFoto.length - 1;
    }

    lightboxFoto.src = daftarFoto[fotoAktif];
}


// Foto berikutnya
function fotoBerikutnya() {

    fotoAktif++;

    if (fotoAktif >= daftarFoto.length) {
        fotoAktif = 0;
    }

    lightboxFoto.src = daftarFoto[fotoAktif];
}


// Tombol
lightboxTutup.addEventListener("click", tutupLightbox);

lightboxPrev.addEventListener("click", fotoSebelumnya);

lightboxNext.addEventListener("click", fotoBerikutnya);


// Klik area gelap untuk menutup
lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        tutupLightbox();
    }

});


// Keyboard
document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("aktif")) {
        return;
    }

    if (event.key === "Escape") {
        tutupLightbox();
    }

    if (event.key === "ArrowLeft") {
        fotoSebelumnya();
    }

    if (event.key === "ArrowRight") {
        fotoBerikutnya();
    }

});

/* ==============================
   ANIMASI FOTO GALERI
   ============================== */

const fotoGaleri = document.querySelectorAll(".galeri-foto");

if (fotoGaleri.length > 0) {

    const observerFotoGaleri = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("animasi-foto-aktif");

                    observerFotoGaleri.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    fotoGaleri.forEach(function (foto) {
        observerFotoGaleri.observe(foto);
    });
}

/* =========================================
   WEDDING GIFT
========================================= */

const bukaWeddingGift = document.getElementById("bukaWeddingGift");
const tutupWeddingGift = document.getElementById("tutupWeddingGift");
const giftModal = document.getElementById("giftModal");
const formWeddingGift = document.getElementById("formWeddingGift");
const hasilKonfirmasi = document.getElementById("hasilKonfirmasi");


/* BUKA POPUP */

if (bukaWeddingGift) {

    bukaWeddingGift.addEventListener("click", function () {

        giftModal.classList.add("aktif");

        document.body.style.overflow = "hidden";

    });

}


/* TUTUP POPUP */

if (tutupWeddingGift) {

    tutupWeddingGift.addEventListener("click", function () {

        giftModal.classList.remove("aktif");

        document.body.style.overflow = "";

    });

}


/* KLIK AREA LUAR POPUP */

if (giftModal) {

    giftModal.addEventListener("click", function (event) {

        if (event.target === giftModal) {

            giftModal.classList.remove("aktif");

            document.body.style.overflow = "";

        }

    });

}


/* TOMBOL ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (
            giftModal &&
            giftModal.classList.contains("aktif")
        ) {

            giftModal.classList.remove("aktif");

            document.body.style.overflow = "";

        }

    }

});


/* =========================================
   SALIN REKENING / ALAMAT
========================================= */

const tombolSalinGift =
    document.querySelectorAll(".tombol-salin");


tombolSalinGift.forEach(function (tombol) {

    tombol.addEventListener("click", function () {

        const teks =
            tombol.getAttribute("data-copy");


        function berhasilSalin() {

            const teksAwal = tombol.innerHTML;

            tombol.innerHTML = "✓ Tersalin";


            setTimeout(function () {

                tombol.innerHTML = teksAwal;

            }, 1500);

        }


        /* Clipboard modern */

        if (
            navigator.clipboard &&
            window.isSecureContext
        ) {

            navigator.clipboard
                .writeText(teks)
                .then(function () {

                    berhasilSalin();

                });

        }

        /* Fallback untuk kondisi tertentu */

        else {

            const textarea =
                document.createElement("textarea");

            textarea.value = teks;

            textarea.style.position = "fixed";
            textarea.style.opacity = "0";

            document.body.appendChild(textarea);

            textarea.select();

            try {

                document.execCommand("copy");

                berhasilSalin();

            } catch (error) {

                alert("Nomor atau alamat tidak dapat disalin.");

            }

            document.body.removeChild(textarea);

        }

    });

});


/* =========================================
   KONFIRMASI
========================================= */

if (formWeddingGift) {

    formWeddingGift.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const nama =
                document.getElementById(
                    "namaPengirim"
                ).value.trim();


            const jenis =
                document.querySelector(
                    'input[name="jenisHadiah"]:checked'
                );


            const tujuan =
                document.querySelector(
                    'input[name="tujuanPengiriman"]:checked'
                );


            const nominal =
                document.getElementById(
                    "nominalTransfer"
                ).value;


            /* =========================
               VALIDASI
            ========================= */

            if (!nama || !jenis || !tujuan) {

                alert(
                    "Mohon lengkapi data konfirmasi terlebih dahulu."
                );

                return;

            }


            /* Jika transfer, nominal wajib diisi */

            if (
                jenis.value === "Transfer uang" &&
                (!nominal || Number(nominal) <= 0)
            ) {

                alert(
                    "Silakan masukkan nominal transfer."
                );

                return;

            }


            /* =========================
               TOMBOL KONFIRMASI
            ========================= */

            const tombolKonfirmasi =
                formWeddingGift.querySelector(
                    ".tombol-konfirmasi"
                );


            const teksTombol =
                tombolKonfirmasi.innerHTML;


            tombolKonfirmasi.disabled = true;

            tombolKonfirmasi.innerHTML =
                "Mengirim...";


            /* =========================
               DATA YANG DIKIRIM
            ========================= */

            const dataGift = {

                tipe: "gift",

                nama: nama,

                jenisHadiah: jenis.value,

                tujuanPengiriman: tujuan.value,

                nominal:
                    jenis.value === "Transfer uang"
                        ? nominal
                        : ""

            };


            try {

                const response = await fetch(
                    "https://script.google.com/macros/s/AKfycbwnxw1mqhxaobTpdfVsVodDGesIYfXGZitBcQIukrhHwdxV463Ltl6g0srMVJtdj72LUw/exec",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "text/plain;charset=utf-8"
                        },

                        body: JSON.stringify(dataGift)
                    }
                );


                const hasil =
                    await response.json();


                if (hasil.status === "success") {

                    formWeddingGift.style.display =
                        "none";


                    hasilKonfirmasi.classList.add(
                        "aktif"
                    );

                } else {

                    throw new Error(
                        "Pengiriman gagal"
                    );

                }


            } catch (error) {

                alert(
                    "Data belum berhasil dikirim. Silakan coba lagi."
                );


                tombolKonfirmasi.disabled =
                    false;


                tombolKonfirmasi.innerHTML =
                    teksTombol;

            }

        }
    );

}

/* =========================
   RSVP
========================= */

const formRSVP =
    document.getElementById("formRSVP");

const jumlahRSVP =
    document.getElementById("jumlahRSVP");

const jumlahRSVPBox =
    document.getElementById("jumlahRSVPBox");

const hasilRSVP =
    document.getElementById("hasilRSVP");


/* =========================
   PILIHAN KEHADIRAN
========================= */

const pilihanKehadiran =
    document.querySelectorAll(
        'input[name="kehadiran"]'
    );


pilihanKehadiran.forEach(function (pilihan) {

    pilihan.addEventListener(
        "change",
        function () {

            if (this.value === "Tidak Hadir") {

                jumlahRSVP.value = "1";

                jumlahRSVPBox.style.display =
                    "none";

            } else {

                jumlahRSVPBox.style.display =
                    "block";

            }

        }
    );

});


/* =========================
   KIRIM RSVP
========================= */

if (formRSVP) {

    formRSVP.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const nama =
                document
                    .getElementById("namaRSVP")
                    .value
                    .trim();


            const kehadiran =
                document.querySelector(
                    'input[name="kehadiran"]:checked'
                );


            if (!nama || !kehadiran) {

                alert(
                    "Mohon lengkapi data RSVP terlebih dahulu."
                );

                return;

            }


            let jumlah = 0;


            if (kehadiran.value === "Hadir") {

                jumlah =
                    Number(jumlahRSVP.value);

            }


            const tombol =
                formRSVP.querySelector(
                    ".tombol-rsvp"
                );


            const teksAwal =
                tombol.innerHTML;


            tombol.disabled = true;

            tombol.innerHTML =
                "MENGIRIM...";


            const dataRSVP = {

                tipe: "rsvp",

                nama: nama,

                kehadiran:
                    kehadiran.value,

                jumlah: jumlah

            };


            try {

                const response =
                    await fetch(

                        "https://script.google.com/macros/s/AKfycbwnxw1mqhxaobTpdfVsVodDGesIYfXGZitBcQIukrhHwdxV463Ltl6g0srMVJtdj72LUw/exec",

                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "text/plain;charset=utf-8"

                            },

                            body:
                                JSON.stringify(
                                    dataRSVP
                                )

                        }

                    );


                const hasil =
                    await response.json();


                if (
                    hasil.status ===
                    "success"
                ) {

                    formRSVP.style.display =
                        "none";

                    hasilRSVP.classList.add(
                        "aktif"
                    );

                } else {

                    throw new Error(
                        "Pengiriman gagal"
                    );

                }


            } catch (error) {

                alert(
                    "Data RSVP belum berhasil dikirim. Silakan coba lagi."
                );


                tombol.disabled =
                    false;

                tombol.innerHTML =
                    teksAwal;

            }

        }
    );

}

/* =====================================================
   UCAPAN & DOA
===================================================== */

const formUcapan =
    document.getElementById("formUcapan");

const hasilUcapan =
    document.getElementById("hasilUcapan");

const listUcapan =
    document.getElementById("listUcapan");


/* =====================================================
   GOOGLE APPS SCRIPT
===================================================== */

const urlWebAppUcapan =
    "https://script.google.com/macros/s/AKfycbwnxw1mqhxaobTpdfVsVodDGesIYfXGZitBcQIukrhHwdxV463Ltl6g0srMVJtdj72LUw/exec";


/* =====================================================
   PENGATURAN
===================================================== */

const ucapanPerHalaman = 5;

let semuaUcapan = [];

let halamanUcapan = 1;


/* =====================================================
   KIRIM UCAPAN
===================================================== */

if (formUcapan) {

    formUcapan.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const nama =
                document
                    .getElementById("namaUcapan")
                    .value
                    .trim();


            const ucapan =
                document
                    .getElementById("isiUcapan")
                    .value
                    .trim();


            /* VALIDASI */

            if (!nama || !ucapan) {

                alert(
                    "Mohon lengkapi nama dan ucapan terlebih dahulu."
                );

                return;

            }


            /* TOMBOL */

            const tombol =
                formUcapan.querySelector(
                    ".tombol-ucapan"
                );


            const teksAwal =
                tombol.innerHTML;


            tombol.disabled = true;

            tombol.innerHTML =
                "MENGIRIM...";


            /* DATA */

            const dataUcapan = {

                tipe: "ucapan",

                nama: nama,

                ucapan: ucapan

            };


            try {

                const response =
                    await fetch(
                        urlWebAppUcapan,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "text/plain;charset=utf-8"
                            },

                            body:
                                JSON.stringify(
                                    dataUcapan
                                )
                        }
                    );


                const hasil =
                    await response.json();


                if (
                    hasil.status !==
                    "success"
                ) {

                    throw new Error(
                        "Pengiriman gagal"
                    );

                }


                /* SEMBUNYIKAN FORM */

                formUcapan.style.display =
                    "none";


                /* TAMPILKAN PESAN BERHASIL */

                hasilUcapan.classList.add(
                    "aktif"
                );


                /*
                   JANGAN LANGSUNG MENUNGGU
                   DATA GOOGLE SHEETS
                */

                setTimeout(
                    function () {

                        muatUcapan();

                    },
                    500
                );


            } catch (error) {

                console.error(
                    "Error Ucapan:",
                    error
                );


                alert(
                    "Ucapan belum berhasil dikirim. Silakan coba lagi."
                );


                tombol.disabled =
                    false;


                tombol.innerHTML =
                    teksAwal;

            }

        }
    );

}


/* =====================================================
   MEMUAT UCAPAN
===================================================== */

async function muatUcapan() {

    if (!listUcapan) {

        return;

    }


    /*
       TAMPILKAN LOADING
    */

    listUcapan.innerHTML = `
        <p class="memuat-ucapan">
            Memuat ucapan...
        </p>
    `;


    /*
       CONTROLLER UNTUK BATAS WAKTU
       8 DETIK
    */

    const controller =
        new AbortController();


    const timeout =
        setTimeout(
            function () {

                controller.abort();

            },
            8000
        );


    try {

        const response =
            await fetch(
                urlWebAppUcapan,
                {
                    method: "GET",

                    cache: "no-store",

                    signal:
                        controller.signal
                }
            );


        clearTimeout(timeout);


        if (!response.ok) {

            throw new Error(
                "Server tidak merespons"
            );

        }


        const data =
            await response.json();


        /*
           VALIDASI DATA
        */

        if (
            !Array.isArray(data)
        ) {

            throw new Error(
                "Format data tidak sesuai"
            );

        }


        /*
           SIMPAN DATA
        */

        semuaUcapan =
            [...data].reverse();


        /*
           JIKA TIDAK ADA UCAPAN
        */

        if (
            semuaUcapan.length === 0
        ) {

            listUcapan.innerHTML = `
                <p class="ucapan-kosong">
                    Belum ada ucapan.
                </p>
            `;

            return;

        }


        /*
           MULAI DARI HALAMAN PERTAMA
        */

        halamanUcapan = 1;


        /*
           TAMPILKAN
        */

        tampilkanHalamanUcapan();


    } catch (error) {

        clearTimeout(timeout);


        console.error(
            "Gagal memuat ucapan:",
            error
        );


        /*
           JIKA TIMEOUT
        */

        if (
            error.name ===
            "AbortError"
        ) {

            listUcapan.innerHTML = `
                <div class="ucapan-error">

                    <p>
                        Ucapan membutuhkan waktu
                        lebih lama untuk dimuat.
                    </p>

                    <button
                        type="button"
                        class="tombol-muat-ulang"
                        onclick="muatUcapan()">

                        Coba Lagi

                    </button>

                </div>
            `;

            return;

        }


        /*
           JIKA ERROR LAIN
        */

        listUcapan.innerHTML = `
            <div class="ucapan-error">

                <p>
                    Ucapan belum dapat dimuat.
                </p>

                <button
                    type="button"
                    class="tombol-muat-ulang"
                    onclick="muatUcapan()">

                    Coba Lagi

                </button>

            </div>
        `;

    }

}


/* =====================================================
   TAMPILKAN UCAPAN PER HALAMAN
===================================================== */

function tampilkanHalamanUcapan() {

    if (!listUcapan) {

        return;

    }


    /*
       HITUNG TOTAL HALAMAN
    */

    const totalHalaman =
        Math.ceil(
            semuaUcapan.length /
            ucapanPerHalaman
        );


    /*
       PASTIKAN HALAMAN VALID
    */

    if (
        halamanUcapan < 1
    ) {

        halamanUcapan = 1;

    }


    if (
        halamanUcapan > totalHalaman
    ) {

        halamanUcapan =
            totalHalaman;

    }


    /*
       POSISI DATA
    */

    const mulai =
        (
            halamanUcapan - 1
        ) *
        ucapanPerHalaman;


    const selesai =
        mulai +
        ucapanPerHalaman;


    const dataHalaman =
        semuaUcapan.slice(
            mulai,
            selesai
        );


    /*
       KOSONGKAN LIST
    */

    listUcapan.innerHTML = "";


    /*
       BUAT KARTU UCAPAN
    */

    dataHalaman.forEach(
        function (item) {

            const kartu =
                document.createElement(
                    "div"
                );


            kartu.className =
                "kartu-ucapan";


            /*
               NAMA
            */

            const nama =
                document.createElement(
                    "p"
                );


            nama.className =
                "kartu-ucapan-nama";


            nama.textContent =
                item.nama ||
                "Tamu";


            /*
               ISI UCAPAN
            */

            const isi =
                document.createElement(
                    "p"
                );


            isi.className =
                "kartu-ucapan-isi";


            isi.textContent =
                item.ucapan ||
                "";


            /*
               MASUKKAN KE KARTU
            */

            kartu.appendChild(
                nama
            );


            kartu.appendChild(
                isi
            );


            /*
               MASUKKAN KE LIST
            */

            listUcapan.appendChild(
                kartu
            );

        }
    );


    /*
       PAGINATION
    */

    if (
        totalHalaman > 1
    ) {

        buatPaginationUcapan(
            totalHalaman
        );

    }

}


/* =====================================================
   PAGINATION
===================================================== */

function buatPaginationUcapan(
    totalHalaman
) {

    const pagination =
        document.createElement(
            "div"
        );


    pagination.className =
        "pagination-ucapan";


    /*
       TOMBOL SEBELUMNYA
    */

    const tombolSebelumnya =
        document.createElement(
            "button"
        );


    tombolSebelumnya.type =
        "button";


    tombolSebelumnya.className =
        "tombol-halaman";


    tombolSebelumnya.innerHTML =
        "‹";


    tombolSebelumnya.disabled =
        halamanUcapan === 1;


    tombolSebelumnya.addEventListener(
        "click",
        function () {

            if (
                halamanUcapan > 1
            ) {

                halamanUcapan--;

                tampilkanHalamanUcapan();

                scrollKeUcapan();

            }

        }
    );


    /*
       INFO HALAMAN
    */

    const infoHalaman =
        document.createElement(
            "span"
        );


    infoHalaman.className =
        "info-halaman";


    infoHalaman.textContent =
        halamanUcapan +
        " / " +
        totalHalaman;


    /*
       TOMBOL BERIKUTNYA
    */

    const tombolBerikutnya =
        document.createElement(
            "button"
        );


    tombolBerikutnya.type =
        "button";


    tombolBerikutnya.className =
        "tombol-halaman";


    tombolBerikutnya.innerHTML =
        "›";


    tombolBerikutnya.disabled =
        halamanUcapan === totalHalaman;


    tombolBerikutnya.addEventListener(
        "click",
        function () {

            if (
                halamanUcapan <
                totalHalaman
            ) {

                halamanUcapan++;

                tampilkanHalamanUcapan();

                scrollKeUcapan();

            }

        }
    );


    /*
       MASUKKAN PAGINATION
    */

    pagination.appendChild(
        tombolSebelumnya
    );


    pagination.appendChild(
        infoHalaman
    );


    pagination.appendChild(
        tombolBerikutnya
    );


    listUcapan.appendChild(
        pagination
    );

}


/* =====================================================
   SCROLL KEMBALI KE BAGIAN UCAPAN
===================================================== */

function scrollKeUcapan() {

    const daftar =
        document.querySelector(
            ".daftar-ucapan"
        );


    if (!daftar) {

        return;

    }


    daftar.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =====================================================
   JALANKAN SAAT HALAMAN DIBUKA
===================================================== */

muatUcapan();

/* =====================================================
   ANIMASI MASUK
   WEDDING GIFT + RSVP + UCAPAN
===================================================== */

const bagianAnimasi = document.querySelectorAll(
    ".wedding-gift, .rsvp, .ucapan, .penutupan"
);


const observerAnimasi =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "animasi-aktif"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


bagianAnimasi.forEach(
    function (bagian) {

        observerAnimasi.observe(
            bagian
        );

    }
);