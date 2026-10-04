const form = document.getElementById("formRegistrasi");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const inputKonfirmasi = document.getElementById("konfirmasi");
const pesanSukses = document.getElementById("pesanSukses");

// Menampilkan pesan error di bawah kolom, atau menghapusnya jika pesan kosong
function tampilkanError(input, idError, pesan) {
  document.getElementById(idError).textContent = pesan;
  if (pesan !== "") {
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const username = inputUsername.value.trim();
  const password = inputPassword.value;
  const konfirmasi = inputKonfirmasi.value;

  let valid = true;
  pesanSukses.textContent = "";
  pesanSukses.classList.remove("tampil");

  // Nama lengkap
  if (nama === "") {
    tampilkanError(inputNama, "errorNama", "Nama lengkap wajib diisi.");
    valid = false;
  } else {
    tampilkanError(inputNama, "errorNama", "");
  }

  // Email
  if (email === "") {
    tampilkanError(inputEmail, "errorEmail", "Email wajib diisi.");
    valid = false;
  } else if (!email.includes("@")) {
    tampilkanError(inputEmail, "errorEmail", "Email harus mengandung tanda @.");
    valid = false;
  } else {
    tampilkanError(inputEmail, "errorEmail", "");
  }

  // Username
  if (username === "") {
    tampilkanError(inputUsername, "errorUsername", "Username wajib diisi.");
    valid = false;
  } else {
    tampilkanError(inputUsername, "errorUsername", "");
  }

  // Password
  if (password === "") {
    tampilkanError(inputPassword, "errorPassword", "Password wajib diisi.");
    valid = false;
  } else if (password.length < 8) {
    tampilkanError(inputPassword, "errorPassword", "Password minimal 8 karakter.");
    valid = false;
  } else {
    tampilkanError(inputPassword, "errorPassword", "");
  }

  // Konfirmasi password
  if (konfirmasi === "") {
    tampilkanError(inputKonfirmasi, "errorKonfirmasi", "Konfirmasi password wajib diisi.");
    valid = false;
  } else if (konfirmasi !== password) {
    tampilkanError(inputKonfirmasi, "errorKonfirmasi", "Password dan konfirmasi password harus sama.");
    valid = false;
  } else {
    tampilkanError(inputKonfirmasi, "errorKonfirmasi", "");
  }

  // Jika semua valid: tampilkan pesan sukses hijau dan kosongkan input
  if (valid) {
    pesanSukses.textContent = "Registrasi berhasil! Akun kamu sudah terdaftar.";
    pesanSukses.classList.add("tampil");
    form.reset();
  }
});