const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const forms = document.querySelectorAll(".newsletter-form, .footer-newsletter, .contact-form");
const yearTargets = document.querySelectorAll(".js-year");

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

forms.forEach((form) => {
  const message = form.querySelector(".form-message");

  form.addEventListener("submit", (event) => {

    // ONLY handle custom forms (not Mailchimp)
    if (!form.action.includes("list-manage.com")) {
      event.preventDefault();

      if (!(message instanceof HTMLElement)) {
        return;
      }

      const successMessage =
        form.getAttribute("data-success-message") || "Thanks, you're on the list.";

      const nameField = form.elements.namedItem("name");
      const name = nameField instanceof HTMLInputElement ? nameField.value.trim() : "";

      if (name && successMessage.includes("Thanks")) {
        message.textContent = successMessage.replace("Thanks", `Thanks, ${name}`);
      } else {
        message.textContent = successMessage;
      }

      form.reset();
    }
  });
});

yearTargets.forEach((target) => {
  target.textContent = String(new Date().getFullYear());
});
