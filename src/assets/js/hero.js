(function () {
    const slides = document.querySelectorAll('#hero .cs-slideshow .slide');
    if (!slides.length) return;

    let i = 0;
    const INTERVAL = 6000; // ms between slides

    // Ensure only the first starts visible
    slides.forEach((s, idx) => s.classList.toggle('is-active', idx === 0));

    let timer = setInterval(next, INTERVAL);

    function next() {
      slides[i].classList.remove('is-active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-active');
    }

    // Pause when tab is hidden, resume when visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { clearInterval(timer); }
      else { timer = setInterval(next, INTERVAL); }
    });
  })();
