

// otomatis tertup saat meng klik tautan lain dalam mobile mode
document.querySelectorAll("#mobile-menu a").forEach(item => {
    item.addEventListener("click", () => {
      document.getElementById("mobile-menu").classList.add("hidden");
    });
  });

  
  

//    testimoni
document.getElementById('testimonial-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai dari formulir
    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;
    const testimonialText = document.getElementById('testimonial').value;
    
    // Buat elemen testimoni baru
    const testimonial = document.createElement('div');
    testimonial.classList.add('testimonial');
    testimonial.innerHTML = `
        <img src="${photo}" class="w-16 h-16 mx-auto rounded-full mb-3" alt="${name}">
        <p class="text-gray-600 italic">"${testimonialText}"</p>
        <h3 class="mt-2 font-semibold">${name}</h3>
    `;
    
    // Tambahkan testimoni baru ke dalam marquee-inner
    const marqueeInner = document.querySelector('.marquee-inner');
    marqueeInner.appendChild(testimonial);
    
    // Reset formulir
    document.getElementById('testimonial-form').reset();
});


// animasi text kedip
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const texts = [
        "WELCOME TO FF STORE",
        "Tempat Top Up Termurah & Terpercaya!",
        "Layanan Cepat, Aman, dan Terjamin!",
        "Nikmati Promo Menarik Setiap Hari!"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];
        if (!isDeleting) {
            textElement.innerHTML = currentText.substring(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1200); // Tunggu sebelum mulai menghapus
                return;
            }
        } else {
            textElement.innerHTML = currentText.substring(0, charIndex--);
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Beralih ke teks berikutnya
            }
        }
        setTimeout(typeEffect, isDeleting ? 80 : 130);
    }

    typeEffect();
});


// // sound
// document.addEventListener("DOMContentLoaded", () => {
//     const audio = document.querySelector("audio");

//     if (audio) {
//         audio.volume = 0.5; // Mengatur volume lebih kecil
//         audio.play().catch(() => {
//             console.log("Autoplay diblokir. Audio akan diputar setelah interaksi pengguna.");
//         });
//     }
// });


// // membuat ketupat
// document.addEventListener("DOMContentLoaded", () => {
//     function createKetupat() {
//         const ketupat = document.createElement("div");
//         ketupat.classList.add("ketupat");

//         // Posisi acak di layar
//         ketupat.style.left = Math.random() * window.innerWidth + "px";

//         // Durasi jatuh acak
//         ketupat.style.animationDuration = (Math.random() * 3 + 2) + "s";

//         document.getElementById("ketupat-container").appendChild(ketupat);

//         // Hapus setelah selesai animasi
//         setTimeout(() => {
//             ketupat.remove();
//         }, 5000);
//     }

//     // Buat ketupat setiap 1 detik
//     setInterval(createKetupat, 1000);

// });

// lentera
// document.addEventListener("DOMContentLoaded", () => {
//     function createLentera() {
//         const lentera = document.createElement("div");
//         lentera.classList.add("lentera");

//         // Posisi acak di layar
//         lentera.style.left = Math.random() * (window.innerWidth - 80) + "px";

//         // Ukuran acak (50px - 90px)
//         let size = Math.floor(Math.random() * 40) + 50;
//         lentera.style.width = size + "px";
//         lentera.style.height = (size * 1.6) + "px";

//         document.getElementById("lentera-container").appendChild(lentera);
//     }

//     // Buat 3 lentera secara acak
//     for (let i = 0; i < 3; i++) {
//         createLentera();
//     }
// });
