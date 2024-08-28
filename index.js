var resulte = 0;

var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");

var btn01 = document.querySelector("#btn01");
var btn02 = document.querySelector("#btn02");
var btn03 = document.querySelector("#btn03");
var btn04 = document.querySelector("#btn04");

var calculer = document.querySelector("#calculer");
var resultetxt = document.querySelector("#nombre");

btn01.addEventListener("click", () => {
  resulte = resulte + 0.01;
});

btn02.addEventListener("click", () => {
  resulte = resulte + 0.02;
});

btn03.addEventListener("click", () => {
  resulte = resulte + 0.05;
});

btn04.addEventListener("click", () => {
  resulte = resulte + 0.2;
});

btn1.addEventListener("click", () => {
  resulte = resulte + 0.5;
});

btn2.addEventListener("click", () => {
  resulte = resulte + 1;
});

btn3.addEventListener("click", () => {
  resulte = resulte + 2;
});

btn4.addEventListener("click", () => {
  resulte = resulte + 5;
});

btn5.addEventListener("click", () => {
  resulte = resulte + 10;
});

calculer.addEventListener("click", () => {
  resultetxt.innerHTML = `
      <h2>${resulte}</h2>
  `;
  resultetxt.style.transform = "rotate(5deg)";
});
