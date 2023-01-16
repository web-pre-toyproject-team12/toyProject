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
const loginArea = document.getElementById("login-area");
const signUpButton = document.getElementById("sign_up_button");
const signInButton = document.getElementById("sign_in_button");

const changeCheck = (a) => {
  if (a.classList.contains("btn-info")) {
    return;
  }
  let b = a.innerHTML;
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

function sign_up() {
  let email = document.getElementById("floatingInput").value;
  let password = document.getElementById("floatingPassword").value;

  $.ajax({
    type: "POST",
    url: "/sign_up",
    data: { email_give: email, pw_give: password },
    success: function (response) {
      if (response["result"] == "success") {
        alert("회원가입이 완료되었습니다.");
      } else {
        alert(response["msg"]);
      }
    },
  });
}

const sign_in = () => {
  let email = document.getElementById("floatingInput").value;
  let password = document.getElementById("floatingPassword").value;

  $.ajax({
    type: "POST",
    url: "/sign_in",
    data: { email_give: email, pw_give: password },
    success: function (response) {
      if (response["result"] == "success") {
        $.cookie("mytoken", response["token"], { path: "/" });
        alert("로그인 완료!");
      } else {
        alert(response["msg"]);
      }
    },
  });
};

// signUpButton.addEventListener("click", sign_up);
signInButton.addEventListener("click", sign_in);
