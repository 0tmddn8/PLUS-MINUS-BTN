const numDiv = document.querySelector(".num");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");

let count = 0;

plusBtn.addEventListener("click", function () {
  numDiv.innerHTML = ++count;
});

minusBtn.addEventListener("click", function () {
  numDiv.innerHTML = --count;
});
