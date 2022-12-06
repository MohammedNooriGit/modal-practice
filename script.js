"use strict";

const modal = document.querySelector(".modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", showModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  const pressedKey = e.key;
  if (pressedKey === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
