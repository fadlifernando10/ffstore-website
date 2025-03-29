

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

