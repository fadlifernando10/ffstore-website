 window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const navbarInner = document.getElementById("navbar-inner");

    if (window.scrollY > 50) {
      navbar.classList.add("bg-white", "shadow-md");
      navbarInner.classList.add("py-2");
      navbarInner.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("bg-white", "shadow-md");
      navbarInner.classList.remove("py-2");
      navbarInner.classList.add("bg-transparent");
    }
  });

  // Fungsi untuk mengganti tampilan antara form login dan registrasi
  function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Pastikan hanya satu form yang aktif
    if (loginForm.style.display === "none") {
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('login-form').style.display = "flex";
  document.getElementById('register-form').style.display = "none";
});





// Validasi form login
function validateLogin() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Contoh validasi sederhana
  if (username === '' || password === '') {
      alert('Nama pengguna dan kata sandi harus diisi.');
      return false;
  }

  // Proses login bisa ditambahkan di sini

  alert('Login berhasil,  Tetapi maaf fitur ini masih dalam pengembangan, silahkan transaksi melalui whatsapp');
  return true;
}

// Validasi form registrasi
function validateRegister() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (username === '' || password === '' || confirmPassword === '') {
      alert('Semua kolom harus diisi.');
      return false;
  }

  if (password !== confirmPassword) {
      alert('Kata sandi dan konfirmasi kata sandi tidak cocok.');
      return false;
  }

  // Proses registrasi bisa ditambahkan di sini

  alert('Registrasi berhasil, Tetapi maaf fitur ini masih dalam pengembangan, silahkan transaksi melalui whatsapp');
  return true;
}

// Tampilkan form login saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('login-form').classList.add('active');
});


function goToHome() {
  window.location.href = "index.html"; // Ganti dengan URL halaman utama Anda
}

