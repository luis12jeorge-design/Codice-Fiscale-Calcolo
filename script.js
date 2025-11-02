// ===============================
// DARK MODE TOGGLE
// ===============================
const toggleButton = document.createElement('button');
toggleButton.id = 'darkModeToggle';
toggleButton.textContent = '🌙 Modalità Scura';
document.querySelector('header').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.textContent = document.body.classList.contains('dark')
    ? '☀️ Modalità Chiara'
    : '🌙 Modalità Scura';
});

// ===============================
// BACK TO TOP BUTTON
// ===============================
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.textContent = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===============================
// OPTIONAL: Fade-In Animation on Scroll
// ===============================
const fadeElements = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
