// TODO 1: input yang menerima nama dan angka (1-10) ✅
// TODO 2: kita harus memproses inputnya, lewat Math.random() ✅
// TODO 3: kita harus menampilkan hasilnya dan menyimpan pesan dari masing-masing sesi✅

// TODO 4: Pastikan nama harus terisi dan angka input harus diantara (1-10)✅
// TODO 5: Pastikan program bisa berhenti ✅


// Try to implement single responsibility principle
// Memvalidasi nama
function validateName(nama) {
    // Memeriksa apakah input kosong
    if (!nama) {
        alert("Sorry, aku tidak bisa memprediksi masa depanmu jika aku tidak tahu namamu.")
        return false;
    }

    // Memeriksa apakah input adalah angka (integer)
    if (!isNaN(nama)) {
        alert("Yah, sepertinya kamu salah input nama. Emangnya namamu ada angkanya? Hahaha");
        return false;
    }

    return true;
}

// Memvalidasi angka
function validateNumber(angkaInput) {
    // Memeriksa apakah input kosong atau bukan angka (tidak bisa menerima string)
    if (!angkaInput) {
        alert("Sorry ya walaupun aku bisa melihat masa depan, tapi aku tidak bisa membaca pikiranmu. Jadi tolong masukkan angka ya.");
        return false;
    }

    // Memeriksa apakah input berada direntang yang ditentukan
    if (!(angkaInput >= 1 && angkaInput <= 10)) {
        alert("Yang bener dong, aku minta input angka dari 1 sampai 10 ya.");
        return false;
    }

    return true;
}

// Membuat main function
function fortuneTeller(nama, angkaInput) {
    let pesan;
    const riwayatPesan = [];
    const angkaPrediksi = Math.floor(Math.random() * 10 + 1);

    if (angkaInput > angkaPrediksi) {
        pesan = `Selamat ${nama}, Kamu akan hoki sepanjang hari!`;
    } else if (angkaInput < angkaPrediksi) {
        pesan = `Waduh, maaf ya ${nama}, Kamu tidak akan hoki sepanjang hari!`;
    } else {
        pesan = `Yaaah ${nama}, Sepertinya kamu akan merasa bosan sepanjang hari!`;
    }

    riwayatPesan.push(pesan);

    alert(`Halo ${nama}!

Angka yang kamu pilih adalah ${angkaInput}. Sementara menurut ramalanku yang tidak pernah salah, angka terhoki hari ini adalah ${angkaPrediksi}.

So, menurutku...

${riwayatPesan.join("\n")}
    `);
}

// Memulai permainan
let gameStillOn = true;

while (gameStillOn) {
    // Saat pertama kali masuk
    if (gameStillOn) {
        alert("Selamat datang di permainan Fortune Teller!");
        const welcome = confirm("Apakah Anda ingin bermain?");
        if (!welcome) {
            alert("Anda tidak jadi bermain? Baiklah, terima kasih sudah mampir.")
            break;
        }
    }

    alert(`Baiklah, Sebelum bermain, ada baiknya kita kenalan dulu.

Kenalin aku Fortune si peramal masa depan. Aku bisa memprediksi masa depanmu loh. Kepo mau tau? Sini aku kasih tau caranya. 

So, Aku bakal memberikan kamu sebuah angka, dan kamu harus menebak apakah angka itu lebih besar, lebih kecil, atau sama dengan angka yang aku berikan.

Jika kamu berhasil menebaknya, kamu akan hoki sepanjang hari. Tapi jika kamu salah menebaknya, kamu akan merasa bosan bahkan sia-sia sepanjang hari. Ups, jangan sedih ya. Aku cuma bercanda kok. Hahaha

Penasaran? Yuk kita mulai permainannya!
    `);

    // init buat user untuk menentukan apakah user masih ingin bermain
    let userStillPlaying = true;

    while (userStillPlaying) {
        // Meminta input nama
        let nama;
        do {
            nama = prompt("Boleh kasih tau nama kamu? ");
        } while (!validateName(nama));

        // Meminta input angka
        let angka;
        do {
            angka = parseInt(prompt("Kamu mau pilih angka berapa? dari 1 sampai 10 ya."));
        } while (!validateNumber(angka));

        fortuneTeller(nama, angka);

        // Meminta konfirmasi untuk melanjutkan permainan
        const lanjut = confirm("Apakah Anda ingin melanjutkan permainan?");
        if (!lanjut) {
            userStillPlaying = false;
            gameStillOn = false;
            alert("Terima kasih telah bermain. Selamat tinggal!");
            break;
        } else {
            userStillPlaying = true;
            alert("Okay, mari kita lanjutkan permainannya!");
        }
    }
}
