const E = document.getElementById("E");
const I = document.getElementById("I");
const S = document.getElementById("S");
const N = document.getElementById("N");
const T = document.getElementById("T");
const F = document.getElementById("F");
const J = document.getElementById("J");
const P = document.getElementById("P");
const startButton = document.getElementById("start-button");
const alphabets = document.querySelectorAll(".alphabet");

const changeCheck = (a) => {
  if (a.classList.contains("btn-info")) {
    return;
  }
  let b = a.innerHTML;
  console.log(b);
  if (b == "E" || b == "I") {
    E.classList.toggle("btn-info");
    I.classList.toggle("btn-info");
  } else if (b == "S" || b == "N") {
    S.classList.toggle("btn-info");
    N.classList.toggle("btn-info");
  } else if (b == "T" || b == "F") {
    T.classList.toggle("btn-info");
    F.classList.toggle("btn-info");
  } else if (b == "J" || b == "P") {
    J.classList.toggle("btn-info");
    P.classList.toggle("btn-info");
  }
};

for (let i = 0; i < alphabets.length; i++) {
  let a = alphabets[i];
  alphabets[i].addEventListener("click", () => changeCheck(a));
}

const getStart = () => {
  let c = document.querySelectorAll(".btn-info");
  let mbti = "";
  c.forEach((item) => (mbti += item.innerHTML));
  let SearchParams = new URLSearchParams(location.search);
  SearchParams.set("mbti", mbti);
  window.location.href = SearchParams;
};

startButton.addEventListener("click", getStart);
