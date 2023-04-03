function validateForm() {
    const nama = document.getElementById("nama").value;
    const buku = document.getElementById("buku").value;
    const tanggalPinjam = document.getElementById("tanggal-pinjam").value;
    const tanggalKembali = document.getElementById("tanggal-kembali").value;
    
    if (nama == '') {
        alert("Nama  harus diisi!");
        nama.focus();
        return false;
    }else if (buku == '') {
        alert("Judul buku harus diisi!");
        buku.focus();
        return false;
    }else if (tanggalPinjam > tanggalKembali) {
        alert("Tanggal kembali harus setelah tanggal pinjam!");
        return false;
    }else {
        alert('Data Tersimpan')
        return true;
    }
}
