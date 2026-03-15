/**
 * extended.js — 모앤라인성형외과
 * Handles: FAQ accordion, floating action buttons visibility
 */

'use strict';

/* ──────────────────────────────────────────
   FAQ Accordion
─────────────────────────────────────────── */
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq__question');
  if (!question) return;

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');

    // Close all open items
    faqItems.forEach((other) => {
      other.classList.remove('is-open');
      const otherQ = other.querySelector('.faq__question');
      if (otherQ) otherQ.setAttribute('aria-expanded', 'false');
    });

    // Toggle clicked item
    if (!isOpen) {
      item.classList.add('is-open');
      question.setAttribute('aria-expanded', 'true');

      // Smooth scroll into view if needed
      setTimeout(() => {
        const rect = item.getBoundingClientRect();
        const headerHeight = document.getElementById('header') ? document.getElementById('header').offsetHeight : 72;
        if (rect.top < headerHeight + 16) {
          window.scrollBy({ top: rect.top - headerHeight - 16, behavior: 'smooth' });
        }
      }, 50);
    }
  });
});

/* ──────────────────────────────────────────
   Floating Action Buttons — show after scroll
─────────────────────────────────────────── */
const floatingActions = document.getElementById('floatingActions');

function handleFloatingVisibility() {
  if (!floatingActions) return;
  if (window.scrollY > 400) {
    floatingActions.classList.add('is-visible');
  } else {
    floatingActions.classList.remove('is-visible');
  }
}

window.addEventListener('scroll', handleFloatingVisibility, { passive: true });
handleFloatingVisibility();

/* ──────────────────────────────────────────
   Nav dropdown — close on outside click (desktop)
─────────────────────────────────────────── */
document.addEventListener('click', (e) => {
  // Only on desktop where dropdowns are CSS-hover based — no JS needed
  // but ensure anchor links in dropdowns close mobile nav
  const dropdownLink = e.target.closest('.nav__dropdown-link');
  if (dropdownLink) {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('hamburger');
    if (nav && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      if (hamburger) {
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }
  }
});

/* ──────────────────────────────────────────
   Re-run reveal observer for new elements
─────────────────────────────────────────── */
// Observe any .reveal elements not yet observed (added by extended sections)
const extendedRevealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        extendedRevealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  }
);

// Observe elements in new sections that main.js may not have caught
document.querySelectorAll(
  '.knowhow__card, .treatment__card, .process__step, .doctor-card, .cert__item, .faq__list'
).forEach((el, i) => {
  // Stagger delay based on siblings
  const parent = el.parentElement;
  if (parent) {
    const siblings = Array.from(parent.querySelectorAll(':scope > ' + el.tagName.toLowerCase() + ', :scope > .knowhow__card, :scope > .treatment__card, :scope > .process__step, :scope > .doctor-card, :scope > .cert__item'));
    const idx = siblings.indexOf(el);
    if (idx > 0) {
      el.style.transitionDelay = `${Math.min(idx * 0.08, 0.5)}s`;
    }
  }
  extendedRevealObserver.observe(el);
});
