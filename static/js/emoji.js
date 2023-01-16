const imgBox = document.querySelector("imgBox");

imgBox.addEventListener("click", function () {
  let clickedCard = e.target;
  clickedCard.classList.add("flip");
});
