let btn = document.querySelector(".has-dropdown a");
let dropdown = document.querySelector(".dropdown");

btn.onclick = function (e) {
  e.preventDefault();

  btn.classList.toggle("zina");
  dropdown.classList.toggle("open");
  // dropdown.style.display = "block";
};
// console.log(btn);

let minus = document.querySelector(".minus");
let count = document.querySelector(".count");
let plus = document.querySelector(".plus");

minus.onclick = function () {
  // count.innerHTML -= 1;
  if (count.innerHTML == 0) {
    return;
  }
  count.innerHTML = count.innerHTML - 1;
};

plus.onclick = function () {
  count.innerHTML = Number(count.innerHTML) + 1;
};
