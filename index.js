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
var texth2 = document.querySelector("h2");

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
  resultetxt.style.transform = "rotate(2deg)";
  resultetxt.style.background = "rgba(0, 0, 0, 0.596)";
});

// mouse over

btn01.addEventListener("mouseover", () => {
  btn01.style.transform = "rotate(2deg)";
});

btn01.addEventListener("mouseout", () => {
  btn01.style.transform = "rotate(0deg)";
});

//

btn02.addEventListener("mouseover", () => {
  btn02.style.transform = "rotate(2deg)";
});

btn02.addEventListener("mouseout", () => {
  btn02.style.transform = "rotate(0deg)";
});

//

btn03.addEventListener("mouseover", () => {
  btn03.style.transform = "rotate(2deg)";
});

btn03.addEventListener("mouseout", () => {
  btn03.style.transform = "rotate(0deg)";
});

//

btn04.addEventListener("mouseover", () => {
  btn04.style.transform = "rotate(2deg)";
});

btn04.addEventListener("mouseout", () => {
  btn04.style.transform = "rotate(0deg)";
});

//

btn1.addEventListener("mouseover", () => {
  btn1.style.transform = "rotate(2deg)";
});

btn1.addEventListener("mouseout", () => {
  btn1.style.transform = "rotate(0deg)";
});
//

btn2.addEventListener("mouseover", () => {
  btn2.style.transform = "rotate(2deg)";
});

btn2.addEventListener("mouseout", () => {
  btn2.style.transform = "rotate(0deg)";
});

//

btn3.addEventListener("mouseover", () => {
  btn3.style.transform = "rotate(2deg)";
});

btn3.addEventListener("mouseout", () => {
  btn3.style.transform = "rotate(0deg)";
});

//

btn4.addEventListener("mouseover", () => {
  btn4.style.transform = "rotate(2deg)";
});

btn4.addEventListener("mouseout", () => {
  btn4.style.transform = "rotate(0deg)";
});

//

btn5.addEventListener("mouseover", () => {
  btn5.style.transform = "rotate(2deg)";
});

//

btn5.addEventListener("mouseout", () => {
  btn5.style.transform = "rotate(0deg)";
});

texth2.addEventListener("mouseover", () => {
  texth2.style.transform = "rotate(2deg)";
});

texth2.addEventListener("mouseout", () => {
  texth2.style.transform = "rotate(0deg)";
});
