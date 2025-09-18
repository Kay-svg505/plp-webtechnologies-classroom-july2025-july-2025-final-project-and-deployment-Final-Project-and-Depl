// Toggle mobile menu
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Simple form validation
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
