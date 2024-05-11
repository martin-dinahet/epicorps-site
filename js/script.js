const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60)
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open'); // Correction ici
};




const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentyear = new Date().getFullYear();
const newyeartime = new Date('July 12 2024 00:00:00');

function updatecountdown() {
  const currenttime = new Date();
  const diff = newyeartime - currenttime;

  const d = Math.floor(diff / 1000 / (60 * 60 * 24));
  const h = Math.floor(diff / 1000 / (60 * 60)) % 24;
  const m = Math.floor(diff / 1000 / (60)) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
setInterval(updatecountdown, 1000);












