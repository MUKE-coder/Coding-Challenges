// Selecting the Elements
// 1) Select the trigger Btn
const triggerBtn = document.getElementById("trigger-btn");

// 2) Select the modal popup
const modal = document.getElementById("modal");

// 3) Select the Overlay
const overlay = document.getElementById("overlay");

// 3) Select the Close Btns
const closeBtns = document.querySelectorAll(".close-btn");

console.log(closeBtns);
// EventListeners
triggerBtn.addEventListener("click", showModal);

closeBtns.forEach((button) => {
  button.addEventListener("click", closeModal);
});
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Functions
function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
