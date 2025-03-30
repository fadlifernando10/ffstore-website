document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");


    
    const hargaProduk = {
        mobilelegends: `
            <p><strong>12 Diamonds</strong> : <br><span class="harga">Rp 4.000</span></p>
            <p><strong>28 Diamonds</strong> : <br><span class="harga">Rp 8.000</span></p>
            <p><strong>59 Diamonds</strong> : <br><span class="harga">Rp 16.500</span></p>
            <p><strong>85 Diamonds</strong> : <br><span class="harga">Rp 23.000</span></p>
            <p><strong>170 Diamonds</strong> : <br><span class="harga">Rp 46.000</span></p>
            <p><strong>240 Diamonds</strong> : <br><span class="harga">Rp 65.000</span></p>
            <p><strong>284 Diamonds</strong> : <br><span class="harga">Rp 80.000</span></p>
            <p><strong>408 Diamonds</strong> : <br><span class="harga">Rp 107.000</span></p>
            <p><strong>Weekly diamond pass 1x</strong> : <br><span class="harga">Rp 28.000</span></p>
            <p><strong>weekly diamond pass 2x</strong> : <br><span class="harga">Rp 56.000</span></p>
            <p>Harga selengkap nya hubungi admin via WhatsApp atau klik tombol di bawah</p>
            <a class="pesan" href="https://wa.me/6282216337514?text=Assalamualaikum%20saya%20mau%20top%20up%20diamond" target="_blank" rel="noopener noreferrer">Pesan Sekarang</a>
            
        `,
        freefire: `
        <p><strong>12 Diamonds</strong> : <br><span class="harga">Rp 2.500</span></p>
        <p><strong>70 Diamonds</strong> : <br><span class="harga">Rp 9.500</span></p>
        <p><strong>100 Diamonds</strong> : <br><span class="harga">Rp 15.000</span></p>
        <p><strong>140 Diamonds</strong> : <br><span class="harga">Rp 19.000</span></p>
        <p><strong>210 Diamonds</strong> : <br><span class="harga">Rp 29.000</span></p>
        <p><strong>355 Diamonds</strong> : <br><span class="harga">Rp 45.000</span></p>
        <p><strong>720 Diamonds</strong> : <br><span class="harga">Rp 95.500</span></p>
        <p><strong>1000 Diamonds</strong> : <br><span class="harga">Rp 135.000</span></p>
        <p><strong>M.mingguan</strong> : <br><span class="harga">Rp 30.000</span></p>
        <p><strong>M.Bulanan</strong> : <br><span class="harga">Rp 85.000</span></p>
        <p>Harga selengkap nya hubungi admin via WhatsApp atau klik tombol di bawah</p>
        <a class="pesan" href="https://wa.me/6282216337514?text=Assalamualaikum%20saya%20mau%20top%20up%20diamond" target="_blank" rel="noopener noreferrer">Pesan Sekarang</a>
    `,
          pubg: `
          <p>Harga selengkapnya hubungi admin via WhatsApp atau klik tombol di bawah</p>
          <a class="pesan" href="https://wa.me/6282216337514?text=Assalamualaikum%20saya%20mau%20top%20up%20diamond" target="_blank" rel="noopener noreferrer">Pesan Sekarang</a>
          
              `,

        efootball: `
          <p>Harga selengkap nya hubungi admin via WhatsApp atau klik tombol di bawah</p>
          <a class="pesan" href="https://wa.me/6282216337514?text=Assalamualaikum%20saya%20mau%20top%20up%20diamond" target="_blank" rel="noopener noreferrer">Pesan Sekarang</a>
              `,

        genshin: `
        <p>Harga selengkap nya hubungi admin via WhatsApp atau klik tombol di bawah</p>
        <a class="pesan" href="https://wa.me/6282216337514?text=Assalamualaikum%20saya%20mau%20top%20up%20diamond" target="_blank" rel="noopener noreferrer">Pesan Sekarang</a>
            `,

        hok: `
        <p>Harga selengkap nya hubungi admin via WhatsApp atau klik tombol di bawah</p>
        <a class="pesan" href="https://wa.me/6282216337514?text=Assalamualaikum%20saya%20mau%20top%20up%20diamond" target="_blank" rel="noopener noreferrer">Pesan Sekarang</a>
            `
    };

    const modal = document.getElementById("popup-modal");
    const closeModal = document.getElementById("close-modal");
    const popupContent = document.getElementById("popup-content");
    const popupTitle = document.getElementById("popup-title");

    document.querySelectorAll(".lihat-harga").forEach(button => {
        button.addEventListener("click", function () {
            console.log("Tombol diklik!");
            const produk = this.getAttribute("data-produk");
            console.log("Produk:", produk);
            popupTitle.innerHTML = `HARGA ${produk.toUpperCase()}`;
            popupContent.innerHTML = hargaProduk[produk] || "Harga tidak tersedia.";
            modal.style.display = "flex"; // Menampilkan modal dengan flex agar center
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
