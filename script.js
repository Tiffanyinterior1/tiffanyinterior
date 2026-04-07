// ==============================
// Smooth scrolling for nav links
// ==============================
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    if (!targetId.startsWith('#')) return;

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ==============================
// Fade-in sections on scroll
// ==============================
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));


// ==============================
// Sticky nav shadow on scroll
// ==============================
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
  } else {
    nav.style.boxShadow = "none";
  }
});


// ==============================
// Dark mode toggle (safe version)
// ==============================
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

if (toggle) {

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggle.textContent = 'Light Mode';
  } else {
    toggle.textContent = 'Dark Mode';
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggle.textContent = 'Light Mode';
    } else {
      localStorage.setItem('theme', 'light');
      toggle.textContent = 'Dark Mode';
    }
  });
}
