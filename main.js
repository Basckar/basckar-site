"use strict";

//Opening or closing side bar

const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

//Activating Modal-testimonial

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

//Activating Filter Select and filtering options
// جمع‌آوری المنت‌ها
const primaryBtns = document.querySelectorAll("[data-filter-primary]");
const secondaryBtns = document.querySelectorAll("[data-filter-secondary]");
const items = document.querySelectorAll("[data-filter-item]");

// وضعیت انتخاب‌شده (پیش‌فرض: همه)
let selectedPrimary = "همه";
let selectedSecondary = "همه";

// تابع اعمال فیلتر ترکیبی
function applyFilter() {
  items.forEach((item) => {
    const p = item.dataset.primary; // ui, سئو, وردپرس, کدنویسی
    const s = item.dataset.secondary; // فروشگاهی, خدماتی

    const matchPrimary = selectedPrimary === "همه" || p === selectedPrimary;
    const matchSecondary =
      selectedSecondary === "همه" || s === selectedSecondary;

    if (matchPrimary && matchSecondary) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// مدیریت فعال‌سازی دکمه‌ها
function activateButton(btns, targetText) {
  btns.forEach((b) => {
    if (b.innerText.trim() === targetText) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}

// رویدادهای سطح اصلی
primaryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedPrimary = btn.innerText.trim();
    activateButton(primaryBtns, selectedPrimary);
    applyFilter();
  });
});

// رویدادهای سطح داخلی
secondaryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedSecondary = btn.innerText.trim();
    activateButton(secondaryBtns, selectedSecondary);
    applyFilter();
  });
});

// اجرای اولیه
applyFilter();
// Enabling Contact Form

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Enabling Page Navigation

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() == pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
