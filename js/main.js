/**
 * main.js — 모앤라인성형외과
 * Handles: navigation, scroll effects, hamburger menu, gallery tabs, form validation
 */

'use strict';

/* ──────────────────────────────────────────
   DOM References
─────────────────────────────────────────── */
const header      = document.getElementById('header');
const hamburger   = document.getElementById('hamburger');
const nav         = document.getElementById('nav');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');

/* ──────────────────────────────────────────
   Utility: throttle
─────────────────────────────────────────── */
function throttle(fn, wait) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

/* ──────────────────────────────────────────
   Header scroll behaviour
   - Adds .is-scrolled once user scrolls past the hero
─────────────────────────────────────────── */
function handleHeaderScroll() {
  const scrollY = window.scrollY;

  if (scrollY > 80) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }

  // Scroll-to-top button visibility
  if (scrollTopBtn) {
    if (scrollY > 400) {
      scrollTopBtn.classList.add('is-visible');
    } else {
      scrollTopBtn.classList.remove('is-visible');
    }
  }
}

window.addEventListener('scroll', throttle(handleHeaderScroll, 100), { passive: true });
handleHeaderScroll(); // run once on load

/* ──────────────────────────────────────────
   Active nav link highlighting on scroll
─────────────────────────────────────────── */
const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
  const scrollMid = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    const sectionTop    = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollMid >= sectionTop && scrollMid < sectionBottom) {
      const id = section.getAttribute('id');
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${id}`) {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      });
    }
  });
}

window.addEventListener('scroll', throttle(updateActiveNavLink, 150), { passive: true });
updateActiveNavLink();

/* ──────────────────────────────────────────
   Hamburger / Mobile Nav
─────────────────────────────────────────── */
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

// Close mobile nav when a link is clicked
nav.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
  if (
    nav.classList.contains('is-open') &&
    !nav.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

/* ──────────────────────────────────────────
   Scroll-to-top button
─────────────────────────────────────────── */
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ──────────────────────────────────────────
   Intersection Observer — reveal animations
─────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Stagger children if the parent has a data-stagger attribute
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px',
  }
);

document.querySelectorAll('.reveal').forEach((el, i) => {
  // Apply a staggered delay based on sibling index within the same parent
  const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .reveal'));
  const siblingIndex = siblings.indexOf(el);
  if (siblingIndex > 0) {
    el.style.transitionDelay = `${siblingIndex * 0.1}s`;
  }
  revealObserver.observe(el);
});

/* ──────────────────────────────────────────
   Gallery Tabs Filter
─────────────────────────────────────────── */
const galleryTabs  = document.querySelectorAll('.gallery__tab');
const galleryItems = document.querySelectorAll('.gallery__item');

galleryTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Update active tab
    galleryTabs.forEach((t) => t.classList.remove('gallery__tab--active'));
    tab.classList.add('gallery__tab--active');

    const filter = tab.getAttribute('data-filter');

    galleryItems.forEach((item) => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.classList.remove('is-hidden');
      } else {
        item.classList.add('is-hidden');
      }
    });
  });
});

/* ──────────────────────────────────────────
   Contact Form Validation & Submission
─────────────────────────────────────────── */
if (contactForm) {
  const fields = {
    name    : { el: document.getElementById('name'),    errEl: document.getElementById('nameError') },
    phone   : { el: document.getElementById('phone'),   errEl: document.getElementById('phoneError') },
    service : { el: document.getElementById('service'), errEl: document.getElementById('serviceError') },
    privacy : { el: document.getElementById('privacy'), errEl: document.getElementById('privacyError') },
  };

  function showError(fieldKey, message) {
    const { el, errEl } = fields[fieldKey];
    el.classList.add('is-invalid');
    if (errEl) {
      errEl.textContent = message;
      errEl.classList.add('is-visible');
    }
  }

  function clearError(fieldKey) {
    const { el, errEl } = fields[fieldKey];
    el.classList.remove('is-invalid');
    if (errEl) errEl.classList.remove('is-visible');
  }

  // Live validation
  Object.keys(fields).forEach((key) => {
    const { el } = fields[key];
    const eventType = el.type === 'checkbox' ? 'change' : 'input';
    el.addEventListener(eventType, () => clearError(key));
  });

  // Phone format: accepts Korean mobile / landline patterns
  function isValidPhone(phone) {
    return /^(0[0-9]{1,2}-[0-9]{3,4}-[0-9]{4}|[0-9]{10,11})$/.test(phone.replace(/\s/g, ''));
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Name validation
    if (!fields.name.el.value.trim()) {
      showError('name', '이름을 입력해 주세요.');
      isValid = false;
    } else {
      clearError('name');
    }

    // Phone validation
    const phoneVal = fields.phone.el.value.trim();
    if (!phoneVal) {
      showError('phone', '연락처를 입력해 주세요.');
      isValid = false;
    } else if (!isValidPhone(phoneVal)) {
      showError('phone', '올바른 연락처 형식을 입력해 주세요. (예: 010-1234-5678)');
      isValid = false;
    } else {
      clearError('phone');
    }

    // Service validation
    if (!fields.service.el.value) {
      showError('service', '관심 시술을 선택해 주세요.');
      isValid = false;
    } else {
      clearError('service');
    }

    // Privacy validation
    if (!fields.privacy.el.checked) {
      showError('privacy', '개인정보 수집·이용에 동의해 주세요.');
      isValid = false;
    } else {
      clearError('privacy');
    }

    if (!isValid) return;

    // Simulate submission
    const submitBtn = contactForm.querySelector('[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 전송 중...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Reset form
      contactForm.reset();

      // Show success alert
      alert('상담 신청이 완료되었습니다.\n\n담당자가 1영업일 이내에 연락드립니다.\n감사합니다.');
    }, 1200);
  });
}

/* ──────────────────────────────────────────
   Phone input auto-formatting
─────────────────────────────────────────── */
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');

    if (val.length <= 3) {
      // no format
    } else if (val.length <= 6) {
      val = `${val.slice(0, 3)}-${val.slice(3)}`;
    } else if (val.startsWith('02')) {
      // Seoul landline: 02-XXXX-XXXX or 02-XXX-XXXX
      if (val.length <= 9) {
        val = `${val.slice(0, 2)}-${val.slice(2, 5)}-${val.slice(5)}`;
      } else {
        val = `${val.slice(0, 2)}-${val.slice(2, 6)}-${val.slice(6, 10)}`;
      }
    } else if (val.length <= 10) {
      val = `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6)}`;
    } else {
      val = `${val.slice(0, 3)}-${val.slice(3, 7)}-${val.slice(7, 11)}`;
    }

    e.target.value = val;
  });
}

/* ──────────────────────────────────────────
   Smooth scroll for anchor links (fallback)
─────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const headerHeight = header ? header.offsetHeight : 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});
