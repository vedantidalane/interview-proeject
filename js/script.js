/* ==========================================================================
   Nexora Technologies - JavaScript Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Theme Toggle System (Light/Dark Mode)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const activeTheme = localStorage.getItem('theme') || 'light';

  // Apply saved theme on load
  document.documentElement.setAttribute('data-theme', activeTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      let newTheme = 'light';
      
      if (currentTheme === 'light') {
        newTheme = 'dark';
      }

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // ==========================================
  // 2. Sticky Navbar scroll height effects
  // ==========================================
  const navbar = document.querySelector('.navbar-custom');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = 'var(--shadow-md)';
      navbar.style.paddingTop = '10px';
      navbar.style.paddingBottom = '10px';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.paddingTop = '18px';
      navbar.style.paddingBottom = '18px';
    }
  });

  // ==========================================
  // 3. Scroll spy and navbar active highlighting
  // ==========================================
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-custom .nav-link');

  const highlightNav = () => {
    let scrollPos = window.scrollY + 120; // offset to align with trigger boundary

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
        const targetId = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${targetId}` || 
              (link.getAttribute('href') === '#' && targetId === 'hero')) {
            link.classList.add('active');
          }
        });
      }
    });

    // Special case for subpages dropdown menu trigger highlighting
    const dropdownTrigger = document.getElementById('servicesDropdown');
    const dropdownActive = document.querySelector('.dropdown-item.active');
    if (dropdownActive && dropdownTrigger) {
      dropdownTrigger.classList.add('active');
    }
  };

  window.addEventListener('scroll', highlightNav);
  window.addEventListener('resize', highlightNav);

  // Close Bootstrap responsive menu on link click
  const navCollapse = document.querySelector('.navbar-collapse');
  const bsNavbarLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle), .dropdown-item');
  
  bsNavbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // ==========================================
  // 4. Reveal-on-scroll Intersection Observer
  // ==========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // ==========================================
  // 5. Back To Top button handler
  // ==========================================
  const backToTopBtn = document.getElementById('btn-back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // 6. Contact Form Frontend Validation
  // ==========================================
  const contactForm = document.getElementById('nexoraContactForm');
  const toastNotification = document.getElementById('successToast');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      let isValid = true;

      // Extract Inputs
      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const phoneInput = document.getElementById('contactPhone');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');

      const inputs = [nameInput, emailInput, phoneInput, subjectInput, messageInput];

      // Reset prior invalid markers
      inputs.forEach(input => {
        if (input) {
          input.classList.remove('is-invalid');
        }
      });

      // Name check
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      }

      // Email check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      }

      // Phone check (optional but must be 10+ digits if provided)
      const phoneRegex = /^[0-9\-\+\s\(\)]{10,18}$/;
      const phoneVal = phoneInput.value.trim();
      if (phoneVal && !phoneRegex.test(phoneVal)) {
        phoneInput.classList.add('is-invalid');
        isValid = false;
      }

      // Subject check
      if (!subjectInput.value || subjectInput.value === "") {
        subjectInput.classList.add('is-invalid');
        isValid = false;
      }

      // Message check
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('is-invalid');
        isValid = false;
      }

      if (isValid) {
        // Trigger visual success notification
        if (toastNotification) {
          toastNotification.classList.add('show');
          
          setTimeout(() => {
            toastNotification.classList.remove('show');
          }, 4000);
        }

        // Reset the form
        contactForm.reset();
      }
    });

    // Remove errors dynamically when user types
    const formFields = contactForm.querySelectorAll('.form-control, .form-select');
    formFields.forEach(field => {
      field.addEventListener('input', () => {
        if (field.classList.contains('is-invalid')) {
          field.classList.remove('is-invalid');
        }
      });
      // Handle change for select element
      field.addEventListener('change', () => {
        if (field.classList.contains('is-invalid')) {
          field.classList.remove('is-invalid');
        }
      });
    });
  }

  // ==========================================
  // 7. Animated Stat Counter
  // ==========================================
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  /**
   * Animates a number from 0 to the data-target value
   * with an easing curve for natural deceleration.
   */
  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(eased * target);

      element.textContent = currentVal + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  // Use IntersectionObserver to trigger counters only once on scroll
  if (statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => statsObserver.observe(num));
  }

  // ==========================================
  // 8. Smooth Scroll for anchor links
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // skip empty hashes

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetEl.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================
  // 9. Year auto-update in footer copyright
  // ==========================================
  const footerYear = document.querySelector('.footer-bottom p');
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Nexora Technologies. All Rights Reserved.`;
  }

});
