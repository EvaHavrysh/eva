/**
 * Eva Portfolio — Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.querySelector('.header-container');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], footer[id]');

  // Add subtle shadow to floating header on scroll
  const handleScroll = () => {
    if (window.scrollY > 20) {
      headerContainer.style.boxShadow = '0 10px 25px -5px rgba(10, 43, 84, 0.08), 0 8px 10px -6px rgba(10, 43, 84, 0.04)';
    } else {
      headerContainer.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Highlight active navigation link on scroll via IntersectionObserver
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }
});
