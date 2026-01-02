document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({ duration: 1000, once: true });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const navList = document.getElementById('navList');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navList.classList.toggle('open');
      const icon = menuBtn.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }

  // Typewriter Effect
  const typingElement = document.getElementById('typing');
  if (typingElement) {
    const words = ["A Robotics Engineer", "An IoT Developer", "A Quick Learner", "A Tech Innovator"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }
    type();
  }

  // Particles.js Config
  if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffd166" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150, color: "#ffd166", opacity: 0.2, width: 1 },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "grab" } }
      },
      retina_detect: true
    });
  }
});