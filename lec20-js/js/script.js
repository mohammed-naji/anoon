// let modal = document.querySelector(".modal");
// let close = document.querySelector(".modal-close");

// setTimeout(function () {
//   modal.classList.add("open");
// }, 3000);

// close.onclick = function () {
//   modal.classList.remove("open");
// };

let count = document.querySelector(".count");
let avatar = document.querySelector(".avatar");
let x = setInterval(function () {
  count.innerHTML -= 1;
  if (count.innerHTML == 0) {
    avatar.style.display = "block";
    clearInterval(x);
  }
}, 1000);

let btn_top = document.querySelector(".top");

window.onscroll = function () {
  console.log(window.scrollY);
  if (window.scrollY > 200) {
    btn_top.classList.add("show");
  } else {
    btn_top.classList.remove("show");
  }
};

btn_top.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
