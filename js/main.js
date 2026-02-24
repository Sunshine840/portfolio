
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function revealLinkedIn() {
  const btn = document.getElementById('linkedinBtn');
  const reveal = document.getElementById('linkedinReveal');
  reveal.classList.add('visible');
  btn.innerHTML = '✓ Profile revealed';
  btn.style.background = '#34c759';
  btn.onclick = null;
}
