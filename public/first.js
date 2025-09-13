// ========= Animate Value ========= //
function animateValue(id, start, end, duration, suffix = '') {
  const obj = document.getElementById(id);
  if (!obj) return;
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

// Run animations only when stats are visible
document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector("#stats-section"); // wrap your counters in this section
  if (!statsSection) return;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateValue("successRate", 0, 95, 1500, "%");
      animateValue("clients", 0, 254, 2000, "+");
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  observer.observe(statsSection);
});

// ========= Counter Animation ========= //
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000; 
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      counter.innerText = Math.floor(progress * target);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        animateCounter(entry.target);
        entry.target.classList.add("counted");
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => observer.observe(counter));
});

// ========= Sidebar Functions ========= //
function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('active');
}
function openSidebar() {
  document.getElementById("mobileSidebar")?.classList.add("show");
}
function closeSidebar() {
  document.getElementById("mobileSidebar")?.classList.remove("show");
}
function toggleSidebarDropdown(event) {
  event.preventDefault();
  const dropdown = event.target.closest(".mobile-dropdown");
  dropdown?.classList.toggle("open");
}

// ========= Testimonials ========= //
document.addEventListener("DOMContentLoaded", () => {
  let currentTestimonial = 0;
  const slides = document.querySelectorAll(".testimonial-slide");

  if (!slides.length) return;

  function showTestimonial(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      slide.style.display = (i === index) ? "block" : "none";
    });
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % slides.length;
    showTestimonial(currentTestimonial);
  }

  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + slides.length) % slides.length;
    showTestimonial(currentTestimonial);
  }

  // Load slider only when testimonial section enters view
  const testimonialSection = document.querySelector("#testimonials");
  if (testimonialSection) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        showTestimonial(currentTestimonial);
        setInterval(nextTestimonial, 5000); // auto-slide
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(testimonialSection);
  }

  // Expose controls globally
  window.nextTestimonial = nextTestimonial;
  window.prevTestimonial = prevTestimonial;
});

  //Our technology Section//
  //home page js
   let currentTestimonial = 0;
 const slides = document.querySelectorAll(".testimonial-slide");
 function showTestimonial(index) {
   slides.forEach((slide, i) => {
     slide.classList.remove("active");
     slide.style.display = "none"; // hide all
     if (i === index) {
       slide.classList.add("active");
       slide.style.display = "block"; // show current
     }
   });
 }
 function nextTestimonial() {
   currentTestimonial = (currentTestimonial + 1) % slides.length;
   showTestimonial(currentTestimonial);
 }
 function prevTestimonial() {
   currentTestimonial =
     (currentTestimonial - 1 + slides.length) % slides.length;
   showTestimonial(currentTestimonial);
 }
 // Auto-slide every 5s
 setInterval(nextTestimonial, 5000);
 // Show first slide on load
 document.addEventListener("DOMContentLoaded", () => {
   showTestimonial(currentTestimonial);
 });