/* =====================================================
   PORTFOLIO INTERACTIONS
===================================================== */


/* =====================================================
   HERO → ABOUT
===================================================== */

const enterButton = document.getElementById("enterButton");

if (enterButton) {
  enterButton.addEventListener("click", () => {

    document.getElementById("about").scrollIntoView({
      behavior: "smooth"
    });

  });
}


/* =====================================================
   MODAL SYSTEM
===================================================== */

const modalTriggers = document.querySelectorAll(
  "[data-modal]"
);

const modals = document.querySelectorAll(".modal");

let activeModal = null;


/* Open */

function openModal(modalId) {

  const modal = document.getElementById(modalId);

  if (!modal) return;

  activeModal = modal;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

}


/* Close */

function closeModal() {

  if (!activeModal) return;

  activeModal.classList.remove("active");
  activeModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  activeModal = null;

}


/* Trigger clicks */

modalTriggers.forEach((trigger) => {

  trigger.addEventListener("click", () => {

    const modalId = trigger.dataset.modal;

    openModal(modalId);

  });


  /* Keyboard accessibility */

  trigger.addEventListener("keydown", (event) => {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      event.preventDefault();

      openModal(trigger.dataset.modal);

    }

  });

});


/* Close buttons */

document.querySelectorAll(".modal-close").forEach((button) => {

  button.addEventListener("click", (event) => {

    event.stopPropagation();

    closeModal();

  });

});


/* Click outside window */

modals.forEach((modal) => {

  modal.addEventListener("click", (event) => {

    if (event.target === modal) {

      closeModal();

    }

  });

});


/* Escape */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeModal();

  }

});


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
  ".section-heading, " +
  ".experience-window, " +
  ".project-card, " +
  ".skill-row, " +
  ".achievement, " +
  ".leadership-card, " +
  ".resume-content"
);


const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {

  element.classList.add("reveal");

  observer.observe(element);

});


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);


document.addEventListener("mousemove", (event) => {

  cursor.style.left = `${event.clientX}px`;

  cursor.style.top = `${event.clientY}px`;

});


/* =====================================================
   CURSOR HOVER
===================================================== */

const interactiveElements = document.querySelectorAll(
  "a, button, " +
  ".project-card, " +
  ".experience-window, " +
  ".leadership-card, " +
  ".polaroid"
);


interactiveElements.forEach((element) => {

  element.addEventListener("mouseenter", () => {

    cursor.classList.add("cursor-active");

  });


  element.addEventListener("mouseleave", () => {

    cursor.classList.remove("cursor-active");

  });

});

/* =====================================================
   COPY EMAIL
===================================================== */

const copyEmailButton = document.getElementById("copyEmail");

if (copyEmailButton) {

  copyEmailButton.addEventListener("click", async () => {

    const email = "mudit.chandak32007@gmail.com";

    try {

      await navigator.clipboard.writeText(email);

      copyEmailButton.textContent = "COPIED ✓";

      setTimeout(() => {
        copyEmailButton.textContent = "COPY EMAIL";
      }, 2000);

    } catch (error) {

      copyEmailButton.textContent = "COPY FAILED";

      setTimeout(() => {
        copyEmailButton.textContent = "COPY EMAIL";
      }, 2000);

    }

  });

}

/* =====================================================
   NAVBAR SCROLL BEHAVIOR
===================================================== */

const nav = document.querySelector(".site-nav");

let lastScrollY = window.scrollY;

if (nav) {

  window.addEventListener("scroll", () => {

    const currentScrollY = window.scrollY;

    if (currentScrollY <= 20) {

      nav.classList.remove("nav-hidden");

    }

    else if (currentScrollY > lastScrollY) {

      nav.classList.add("nav-hidden");

    }

    else {

      nav.classList.remove("nav-hidden");

    }

    lastScrollY = currentScrollY;

  }, { passive: true });

}