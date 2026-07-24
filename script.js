const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const years = document.querySelectorAll('#year');
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

years.forEach((yearEl) => {
  yearEl.textContent = new Date().getFullYear();
});

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || 'there';
    status.textContent = `Thanks, ${name}! Your message is queued for the GameProfolio team.`;
    form.reset();
  });
}
