
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
  