function validateForm() {
    // Get values from form
    var judul = document.getElementById("judul").value;
    var penulis = document.getElementById("penulis").value;
    var penerbit = document.getElementById("penerbit").value;
    var tahun_terbit = document.getElementById("tahun_terbit").value;
    var sinopsis = document.getElementById("sinopsis").value;
  
    // Validate input
    if (judul == "") {
      alert("Judul harus diisi");
      return false;
    }
    if (penulis == "") {
      alert("Penulis harus diisi");
      return false;
    }
    if (penerbit == "") {
      alert("Penerbit harus diisi");
      return false;
    }
    if (tahun_terbit == "") {
      alert("Tahun terbit harus diisi");
      return false;
    }
    if (sinopsis == "") {
      alert("Sinopsis harus diisi");
      return false;
    }
  
    // If all input is valid
    alert("Data berhasil disimpan");
    return true;
  }
  