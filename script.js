// ==============================
// Smooth scrolling for nav links
// ==============================
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    // Allow normal navigation for external links
    if (!targetId.startsWith('#')) return;

    e.preventDefault();
    const target = document.querySelector(targetId);

    if (target) {
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
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));


// ==============================
// Dark mode toggle (text only)
// ==============================
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggle.textContent = 'Light Mode';
} else {
  body.classList.remove('dark-mode');
  toggle.textContent = 'Dark Mode';
}

// Toggle theme on click
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
