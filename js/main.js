document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll('.product-card, .hero-left, .hero-right');
  
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('fadein');
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => obs.observe(el));
});
