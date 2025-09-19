// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// ===== SIMPLE FORM VALIDATION =====
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const email = document.querySelector('#email').value;
    if (!email.includes('@')) {
      alert('Please enter a valid email!');
      e.preventDefault();
    }
  });
}

// ===== TYPING EFFECT FOR MULTIPLE PARAGRAPHS =====
const paragraphs = document.querySelectorAll('.typing-text');

paragraphs.forEach((p, index) => {
  const typingDuration = 3000; // match CSS duration
  const delay = index * 3500;  // stagger each paragraph

  // Apply stagger delay to CSS animation
  p.style.animationDelay = `${delay}ms`;

  // Remove cursor after typing finishes
  setTimeout(() => {
    p.classList.add('finished');
  }, delay + typingDuration);
});
