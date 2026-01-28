import "./style.css";

const btnEl = document.getElementById("btn");
const menuEl = document.getElementById("menu");
const FacebookEl = document.getElementById("Facebook");
const YouTubeEl = document.getElementById("YouTube");
const TwitterEl = document.getElementById("Twitter");
const LinkedinEl = document.getElementById("Linkedin");

btnEl.addEventListener("click", () => {
  menuEl.classList.toggle("hiden");
});
FacebookEl.addEventListener("click", () => {
  btnEl.innerText = FacebookEl.innerText;
  menuEl.classList.remove("hiden");
});
YouTubeEl.addEventListener("click", () => {
  btnEl.innerText = YouTubeEl.innerText;
  menuEl.classList.remove("hiden");
});
TwitterEl.addEventListener("click", () => {
  btnEl.innerText = TwitterEl.innerText;
  menuEl.classList.remove("hiden");
});
LinkedinEl.addEventListener("click", () => {
  btnEl.innerText = LinkedinEl.innerText;
  menuEl.classList.remove("hiden");
});
