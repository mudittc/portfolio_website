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

  document.body.style.overflow = "hidden";

}


/* Close */

function closeModal() {

  if (!activeModal) return;

  activeModal.classList.remove("active");

  document.body.style.overflow = "";

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
  ".leadership-card"
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