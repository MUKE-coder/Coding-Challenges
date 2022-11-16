// Select element

const signInBtn = document.getElementById("login");
const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

signInBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains(".hidden")) {
    closeModal();
  }
});
function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
