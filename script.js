document.getElementById('year').textContent = new Date().getFullYear();

// === Particles.js Initialization ===
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#00eaff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 150, color: '#00eaff', opacity: 0.2, width: 1 },
    move: { enable: true, speed: 2 }
  }
});

const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navMenu');
const header = document.getElementById('header');

// === Menu Toggle Mobile ===
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  nav.classList.toggle('show');
});

// === Header Scroll Effect ===
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// === Smooth Scroll Navigation & Close Menu on Click (Mobile) ===
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const target = link.getAttribute('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      // Tutup menu setelah klik pada perangkat mobile
      if (window.innerWidth <= 768) {
        toggle.classList.remove('active');
        nav.classList.remove('show');
      }
    }
  });
});

// === BAGIAN KEAHLIAN INTERAKTIF (Accordion) ===
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");
  
  skills.forEach((skill) => {
    skill.addEventListener("click", () => {
      // Tutup skill lain
      skills.forEach((s) => {
        if (s !== skill) s.classList.remove("active");
      });
      
      // Toggle skill yang diklik
      skill.classList.toggle("active");
    });
  });
});

// === Animasi muncul Hobi (Intersection Observer) ===
const hobbies = document.querySelectorAll('.hobby');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Hentikan observasi setelah terlihat
    }
  });
}, { threshold: 0.2 });
hobbies.forEach(hobby => observer.observe(hobby));

// === Play / Pause Audio Musik ===
const playButtons = document.querySelectorAll('.music-card .play-btn');

playButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const audio = btn.previousElementSibling;
    const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;

    // Hentikan semua lagu lain & reset semua ikon
    document.querySelectorAll('.music-card audio').forEach(a => {
      if (a !== audio) a.pause();
    });
    playButtons.forEach(b => {
      if (b !== btn) b.innerHTML = playIcon;
    });

    // Mainkan atau jeda lagu yang diklik
    if (audio.paused) {
      audio.play();
      btn.innerHTML = pauseIcon;
    } else {
      audio.pause();
      btn.innerHTML = playIcon;
    }
  });
});

// Tambahkan event listener agar tombol berubah balik ke "play" setelah lagu selesai
document.querySelectorAll('.music-card audio').forEach(audio => {
  audio.addEventListener('ended', () => {
    const btn = audio.nextElementSibling;
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
  });
});
