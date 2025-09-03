
  function animateValue(id, start, end, duration, suffix = '') {
    const obj = document.getElementById(id);
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      obj.textContent = value + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }

  // Start animations when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    animateValue("successRate", 0, 95, 1500, "%");
    animateValue("clients", 0, 254, 2000, "+");
  });

//what we do section

//FOR Phones
  function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }

  function openSidebar() {
    document.getElementById("mobileSidebar").classList.add("show");
  }

  function closeSidebar() {
    document.getElementById("mobileSidebar").classList.remove("show");
  }

  function toggleSidebarDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.closest(".mobile-dropdown");
    dropdown.classList.toggle("open");
  }


  //Our technology Section//
     let current = 0;
  const slides = document.querySelectorAll('.testimonial-slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextTestimonial() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevTestimonial() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  // Auto play every 3 seconds
  setInterval(nextTestimonial, 3000);

  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    showSlide(current);
  });