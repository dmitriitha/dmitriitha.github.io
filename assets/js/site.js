document.addEventListener("DOMContentLoaded", function () {
  var trackedElements = document.querySelectorAll("[data-track]");

  trackedElements.forEach(function (element) {
    element.addEventListener("click", function () {
      var eventName = element.getAttribute("data-track");

      if (window.gtag && eventName) {
        window.gtag("event", eventName, {
          event_category: "engagement",
          event_label: element.textContent.trim() || element.getAttribute("href")
        });
      }
    });
  });

  var contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function () {
      if (window.gtag) {
        window.gtag("event", "contact_form_submit", {
          event_category: "lead"
        });
      }
    });
  }
});
