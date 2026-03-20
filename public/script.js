const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");
const yearTarget = document.querySelector("#year");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (newsletterForm && formMessage) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = newsletterForm.elements.namedItem("name");
    const email = newsletterForm.elements.namedItem("email");

    if (!(name instanceof HTMLInputElement) || !(email instanceof HTMLInputElement)) {
      return;
    }

    formMessage.textContent = `Thanks${name.value ? `, ${name.value}` : ""}. You are on the list.`;
    newsletterForm.reset();
  });
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
