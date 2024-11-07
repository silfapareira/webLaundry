document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Semua kolom wajib diisi.');
        } else if (!validateEmail(email)) {
            alert('Alamat email tidak valid.');
        } else {
            alert('Terima kasih atas pesan Anda!');
            contactForm.reset(); 
        }
    });


    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Interaktivitas Dinamis: Popup alert saat gambar diklik
    const clickableImages = document.querySelectorAll('.clickable-image');
    clickableImages.forEach(image => {
        image.addEventListener('click', function() {
            alert('Anda mengklik gambar: ' + this.alt);
            toggleImageSize(this);
        });
    });

    // Animasi Sederhana: Gambar berubah ukuran saat diklik
    function toggleImageSize(image) {
        if (image.style.width === '200px') {
            image.style.width = '100%';
            image.style.height = 'auto';
        } else {
            image.style.width = '200px';
            image.style.height = 'auto';
        }
    }
});
