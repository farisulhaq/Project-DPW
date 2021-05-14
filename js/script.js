var modal = document.querySelector(".modal-cv");
var btn = document.querySelector("#closeModal");
var cetak = document.querySelector("#btn-cetak");
// Close Dari Modal Cetak
btn.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// cetak
cetak.onclick = function() {
    window.print();
}
// validasi data
function validasi() {
    var photo = document.querySelector("#up-photo");
    var namaD = document.querySelector("#nama-dpn");
    var namaB = document.querySelector("#nama-blkg");
    var kota = document.querySelector("#kota");
    var tgl = document.querySelector("#tgl");
    var jenisK = document.querySelector("#jkel");
    var pekerjaan = document.querySelector("#pekerjaan");
    var telp = document.querySelector("#telp");
    var email = document.querySelector("#email");
    var negara = document.querySelector("#kwn");
    var nik = document.querySelector("#nik");
    var alamat = document.querySelector("#alamat");
    var web = document.querySelector("#web");
    var ig = document.querySelector("#ig");
    var fb = document.querySelector("#fb");
    var skl1 = document.querySelector("#sekolah1");
    var jrs1 = document.querySelector("#jurusan1");
    var thn1 = document.querySelector("#tahun1");
    var skl2 = document.querySelector("#sekolah2");
    var jrs2 = document.querySelector("#jurusan2");
    var thn2 = document.querySelector("#tahun2");
    var skl3 = document.querySelector("#sekolah3");
    var jrs3 = document.querySelector("#jurusan3");
    var thn3 = document.querySelector("#tahun3");
    var desc = document.querySelector("#desc-me");
    var skil = document.querySelector("#skills");
    var exp = document.querySelector("#exp");
    // Error Line
    var photoErr = "";
    var namaDErr = "";
    var namaBErr = "";
    var kotaErr = "";
    var tglErr = "";
    var jenisKErr = "";
    var pekerjaanErr = "";
    var telpErr = "";
    var emailErr = "";
    var negaraErr = "";
    var nikErr = "";
    var alamatErr = "";
    var webErr = "";
    var igErr = "";
    var fbErr = "";
    var skl1Err = "";
    var jrs1Err = "";
    var thn1Err = "";
    var skl2Err = "";
    var jrs2Err = "";
    var thn2Err = "";
    var skl3Err = "";
    var jrs3Err = "";
    var thn3Err = "";
    var descErr = "";
    var skilErr = "";
    var expErr = "";
    // cek photo
    if (photo.value == "") {
        photoErr = "Anda Belum Upluad Foto";
        // photo.style.border = "2px solid red";
        document.querySelector("#photoErr").innerHTML = photoErr;
    } else {
        var pathFile = photo.value;
        var ekstensiOk = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (!ekstensiOk.exec(pathFile)) {
            photoErr = "Ekstensi Tidak Sesuai"
            document.querySelector("#photoErr").innerHTML = photoErr;
            photo.value = '';
        } else {
            alert("saya")
            // Preview gambar
            if (photo.files && photo.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    document.querySelector("#gambar").innerHTML = '<img src="'+e.target.result+'" style="width: 200; height: 200px; border-radius: 50%"/>';
                };
                reader.readAsDataURL(photo.files[0]);
            }
        }

    }
    // Cek nama depan 
    if (namaD.value == "") {
        namaDErr = "Anda Belum mengisi Nama Depan";
        namaD.style.border = "2px solid red";
        document.querySelector("#namaDErr").innerHTML = namaDErr;
    } else {
        namaD.style.border = "2px solid green";
    }
    // cek nama belakang
    if (namaB.value == "") {
        namaBErr = "Anda Belum Mengisi Nama Belakang";
        namaB.style.border = "2px solid red";
        document.querySelector("#namaBErr").innerHTML = namaBErr;
    } else {
        namaB.style.border = "2px solid green";
    }
    // Cek Nama depan dan belakang ada
    if ((namaD.value != "") && (namaB.value != "")) {
        document.querySelector("#namaCV").innerHTML = namaD.value.toUpperCase() + " " + namaB.value.toUpperCase();
        document.querySelector("#nameCV").innerHTML = namaD.value.toUpperCase() + " " + namaB.value.toUpperCase();
    }
    // cek Kota
    if (kota.value == "") {
        kotaErr = "Anda Belum Mengisi Tempat Lahir";
        kota.style.border = "2px solid red";
        document.querySelector("#kotaErr").innerHTML = kotaErr;
    } else {
        kota.style.border = "2px solid green";
        document.querySelector('#kotaCV').innerHTML = kota.value.toUpperCase();
    }
    // cek tgl
    if (tgl.value == "") {
        tglErr = "Anda Belum Mengisi Tanggal Lahir";
        tgl.style.border = "2px solid red";
        document.querySelector("#tglErr").innerHTML = tglErr;
    } else {
        tgl.style.border = "2px solid green";
        document.querySelector('#tglCV').innerHTML = tgl.value;
    }
    // cek Jenis kelamin
    if (jenisK.value == "") {
        jenisKErr = "Anda Belum Mengisi Jenis Kelamin";
        jenisK.style.border = "2px solid red";
        document.querySelector("#jenisKErr").innerHTML = jenisKErr;
    } else {
        jenisK.style.border = "2px solid green";
        document.querySelector('#genderCV').innerHTML = jenisK.value.toUpperCase();
    }
    // cek pekerjaan 
    if (pekerjaan.value == "") {
        pekerjaanErr = "Anda Belum Mengisi Pekerjaan";
        pekerjaan.style.border = "2px solid red";
        document.querySelector('#pekerjaanErr').innerHTML = pekerjaanErr;
    } else {
        pekerjaan.style.border = "2px solid green";
        document.querySelector('#jobCV').innerHTML = pekerjaan.value.toUpperCase();
    }
    // cek Nomer Hp
    if (telp.value == "") {
        telpErr = "Anda Belum Mengisi No. Hp";
        telp.style.border = "2px solid red";
        document.querySelector('#telpErr').innerHTML = telpErr;
    } else if ((telp.value.trim().length < 10) || (telp.value.trim().length > 12)) {
        telpErr = "Format No. Hp Salah";
        telp.style.border = "2px solid red";
        document.querySelector('#telpErr').innerHTML = telpErr;    
    } else {
        telp.style.border = "2px solid green";
        document.querySelector('#nohpCV').innerHTML = telp.value;
    }
    // cek Email
    var cek=/^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/i;
	var hasil=cek.test(email.value)
	if (hasil==false){
		emailErr = "Email Tidak Valid";
		email.style.border= "2px solid red";
        document.querySelector('#emailErr').innerHTML = emailErr;
	}
	else{
		email.style.border= "2px solid green";
        document.querySelector('#emailCV').innerHTML = email.value;
	}
    // cek negara
    if (negara.value == "") {
        negaraErr = "Anda Belum Mengisi Kewarganegaraan";
        negara.style.border = "2px solid red";
        document.querySelector('#negaraErr').innerHTML = negaraErr;
    } else {
        negara.style.border = "2px solid green";
        document.querySelector('#negaraCV').innerHTML = negara.value.toUpperCase();
    }
    // cek nik
    if (nik.value == "") {
        nikErr = "Anda Belum Mengisi NIK";
        nik.style.border = "2px solid red";
        document.querySelector('#nikErr').innerHTML = nikErr;
    } else if (nik.value.trim().length != 16) {
        nikErr = "Nik Harus 16 digit";
        nik.style.border = "2px solid red";
        document.querySelector('#nikErr').innerHTML = nikErr;
    } else {
        nik.style.border = "2px solid green";
        document.querySelector('#nikCV').innerHTML = nik.value;
    }
    // cek alamat
    if (alamat.value == "") {
        alamatErr = "Anda Belum Mengisi Alamat";
        alamat.style.border = "2px solid red";
        document.querySelector('#alamatErr').innerHTML = alamatErr;
    } else {
        alamat.style.border = "2px solid green";
        document.querySelector('#alamatCV').innerHTML = alamat.value;
    } 
    // cek Web
    if (web.value == "") {
        webErr = "Jika Tidak Punya Isikan '-'";
        web.style.border = "2px solid red";
        document.querySelector('#webErr').innerHTML = webErr;
    } else {
        web.style.border = "2px solid green";
        document.querySelector('#webCV').innerHTML = web.value;
    }
    // cek ig
    if (ig.value == "") {
        igErr = "Jika Tidak Punya Isikan '-'";
        ig.style.border = "2px solid red";
        document.querySelector('#igErr').innerHTML = igErr;
    } else {
        ig.style.border = "2px solid green";
        document.querySelector('#igCV').innerHTML = ig.value;
    }
    // cek fb
    if (fb.value == "") {
        fbErr = "Jika Tidak Punya Isikan '-'";
        fb.style.border = "2px solid red";
        document.querySelector('#fbErr').innerHTML = fbErr;
    } else {
        fb.style.border = "2px solid green";
        document.querySelector('#fbCV').innerHTML = fb.value;
    }
    // cek sekolah 1
    if (skl1.value == "") {
        skl1Err = "Anda Belum Mengisi Nama Sekolah";
        skl1.style.border = "2px solid red";
        document.querySelector('#skl1Err').innerHTML = skl1Err;
    } else {
        skl1.style.border = "2px solid green";
        document.querySelector('#skl1CV').innerHTML = skl1.value.toUpperCase();
    }
    // cek jurusan 1
    if (jrs1.value == "") {
        jrs1Err = "Anda Belum Mengisi Nama Jurusan";
        jrs1.style.border = "2px solid red";
        document.querySelector('#jrs1Err').innerHTML = jrs1Err;
    } else {
        jrs1.style.border = "2px solid green";
        document.querySelector('#jrs1CV').innerHTML = jrs1.value.toUpperCase();
    }
    // cek tahun ajaran 1
    if (thn1.value == "") {
        thn1Err = "Anda Belum Mengisi Tahun Ajaran";
        thn1.style.border = "2px solid red";
        document.querySelector('#thn1Err').innerHTML = thn1Err;
    } else {
        thn1.style.border = "2px solid green";
        document.querySelector('#thn1CV').innerHTML = thn1.value;
    }
    // cek sekolah 2
    if (skl2.value == "") {
        skl2Err = "Anda Belum Mengisi Nama Sekolah";
        skl2.style.border = "2px solid red";
        document.querySelector('#skl2Err').innerHTML = skl2Err;
    } else {
        skl2.style.border = "2px solid green";
        document.querySelector('#skl2CV').innerHTML = skl2.value.toUpperCase();
    }
    // cek jurusan 2
    if (jrs2.value == "") {
        jrs2Err = "Anda Belum Mengisi Nama Jurusan";
        jrs2.style.border = "2px solid red";
        document.querySelector('#jrs2Err').innerHTML = jrs2Err;
    } else {
        jrs2.style.border = "2px solid green";
        document.querySelector('#jrs2CV').innerHTML = jrs2.value.toUpperCase();
    }
    // cek tahun ajaran 2
    if (thn2.value == "") {
        thn2Err = "Anda Belum Mengisi Tahun Ajaran";
        thn2.style.border = "2px solid red";
        document.querySelector('#thn2Err').innerHTML = thn2Err;
    } else {
        thn2.style.border = "2px solid green";
        document.querySelector('#thn2CV').innerHTML = thn2.value;
    }
    // cek sekolah 3
    if (skl3.value == "") {
        skl3Err = "Anda Belum Mengisi Nama Sekolah";
        skl3.style.border = "2px solid red";
        document.querySelector('#skl3Err').innerHTML = skl3Err;
    } else {
        skl3.style.border = "2px solid green";
        document.querySelector('#skl3CV').innerHTML = skl3.value.toUpperCase();
    }
    // cek jurusan 3
    if (jrs3.value == "") {
        jrs3Err = "Anda Belum Mengisi Nama Jurusan";
        jrs3.style.border = "2px solid red";
        document.querySelector('#jrs3Err').innerHTML = jrs3Err;
    } else {
        jrs3.style.border = "2px solid green";
        document.querySelector('#jrs3CV').innerHTML = jrs3.value.toUpperCase();
    }
    // cek tahun ajaran 3
    if (thn3.value == "") {
        thn3Err = "Anda Belum Mengisi Nama Sekolah";
        thn3.style.border = "2px solid red";
        document.querySelector('#thn3Err').innerHTML = thn3Err;
    } else {
        thn3.style.border = "2px solid green";
        document.querySelector('#thn3CV').innerHTML = thn3.value;
    }
    // cek deckripsi
    if (desc.value == "") {
        descErr = "Anda Belum Mengisi Deskripsi Diri"
        desc.style.border = "2px solid red";
        document.querySelector('#descErr').innerHTML = descErr;
    } else if (desc.value.trim().length > 70) {
        descErr = "Maksimal 70 karakter"
        desc.style.border = "2px solid red";
        document.querySelector('#descErr').innerHTML = descErr;
    }
    else {
        desc.style.border = "2px solid green";
        document.querySelector('#aboutCV').innerHTML = desc.value;
    }
    // cek apakah ada eror
    if ((photoErr != "") || (namaDErr != "") || (namaBErr != "") || (kotaErr != "") || (tglErr != "") || (jenisKErr != "") || (pekerjaanErr != "") || (telpErr != "") || (emailErr != "") || (negaraErr != "") || (nikErr != "") || (alamatErr != "") || (webErr != "") || (igErr != "") || (fbErr != "") || (skl1Err != "") || (jrs1Err != "") || (thn1Err != "") || (skl2Err != "") || (jrs2Err != "") || (thn2Err != "") || (skl3Err != "") || (jrs3Err != "") || (thn3Err != "") || (descErr != "") ||(skilErr != "") || (expErr != "")) {
        return false;
    } else {
        alert("saya")
        document.querySelector(".modal-cv").style.display = "block";
        return false;
    }
}
// hapus Error
function hpsErr(id,eror) {
    document.getElementById(eror).innerHTML = "";
    document.getElementById(id).style.border = "";
}
// inputan wajin angka
function angka(e,id,eror) {
    var pesanErr = "";
    if ((e.keyCode != 13) && (e.keyCode < 48) || (e.keyCode > 57)) {
        pesanErr = "Inputan Wajib Angka";
        document.getElementById(id).style.border = "2px solid red";
        document.getElementById(eror).innerHTML = pesanErr;
        return false;
    } else {
        hpsErr(id,eror);
    }
}