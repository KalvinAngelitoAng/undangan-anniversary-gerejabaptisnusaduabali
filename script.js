document.addEventListener('DOMContentLoaded', function () {

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Countdown Timer ---
    const countdownDate = new Date("Oct 6, 2025 18:30:00").getTime();
    const countdownFunction = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "Acara Telah Berlangsung!";
        }
    }, 1000);

    // --- Animate On Scroll (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(el => observer.observe(el));

    // --- Swiper Gallery Initialization ---
    // ===== PERUBAHAN DI SINI =====
    const swiper = new Swiper('.gallery-slider', {
        // Konfigurasi Autoplay ditambahkan
        autoplay: {
            delay: 2500, // Waktu jeda antar slide (dalam milidetik), misal: 2.5 detik
            disableOnInteraction: false, // Lanjutkan autoplay meskipun user berinteraksi (klik)
        },
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // Tampilkan 3 slide untuk layar 768px atau lebih lebar
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
    // ===== AKHIR PERUBAHAN =====
});