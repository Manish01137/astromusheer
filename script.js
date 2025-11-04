// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('#mainNav a').forEach(a => {
  a.addEventListener('click', () => {
    if (nav.classList.contains('open')) nav.classList.remove('open');
  });
});

// Populate current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form handling (client-side only)
// Replace this with fetch to your server endpoint when ready.
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.textContent = ''; // clear

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill all fields.';
    return;
  }

  // Show a friendly local success message (simulate send)
  formStatus.style.color = '#f6e7b1';
  formStatus.textContent = 'Sending message…';

  // simulate network delay
  setTimeout(() => {
    formStatus.textContent = 'Thanks — your message was sent. I will contact you soon.';
    form.reset();
  }, 900);
});

// Smooth scrolling for anchor links (native behavior is enabled via CSS scroll-behavior)
// But ensure older browsers fallback:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    if (!targetId) return;
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

