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
    const countdownDate = new Date("Oct 10, 2025 10:00:00").getTime();
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


    // --- Comment Section Logic ---
    const commentForm = document.getElementById('commentForm');
    const marqueeContainer = document.getElementById('commentMarquee');

    let comments = [
        { name: 'Jemaat Tuhan', text: 'Selamat Ulang Tahun Pertama! Tuhan Yesus memberkati.' },
        { name: 'Hamba Tuhan', text: 'Teruslah bertumbuh dan menjadi berkat bagi banyak orang.' },
        { name: 'Simpatisan', text: 'Sukacita melimpah untuk GBI Nusa Dua! Maju terus dalam pelayanan.' },
        { name: 'Keluarga Sion', text: 'Selamat atas satu tahun pelayanannya. Soli Deo Gloria!' }
    ];

    function renderComments() {
        marqueeContainer.innerHTML = '';
        const duplicatedComments = [...comments, ...comments]; // Untuk efek rolling yang mulus

        duplicatedComments.forEach(comment => {
            const commentCard = document.createElement('div');
            commentCard.className = 'comment-card';
            commentCard.innerHTML = `<strong>${comment.name}:</strong> <em>"${comment.text}"</em>`;
            marqueeContainer.appendChild(commentCard);
        });
    }

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('commenterName').value;
        const text = document.getElementById('commentText').value;

        if (name && text) {
            comments.unshift({ name, text });
            renderComments();
            commentForm.reset();
        }
    });

    renderComments(); // Tampilkan komentar awal saat halaman dimuat
});