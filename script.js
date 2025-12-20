// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Dark mode toggle with sun/moon icon
const toggle = document.getElementById('darkModeToggle');
const toggleIcon = document.getElementById('toggleIcon');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if(document.body.classList.contains('dark-mode')) {
    toggleIcon.textContent = '☀️'; // sun icon when dark mode is active
    toggle.textContent = ' Light Mode';
    toggle.prepend(toggleIcon);
  } else {
    toggleIcon.textContent = '🌙'; // moon icon for light mode
    toggle.textContent = ' Dark Mode';
    toggle.prepend(toggleIcon);
  }
});
