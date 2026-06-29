// let btn = document.getElementById("hide"); // HTML ELEMENT
// let btn_hide = document.querySelector("#hide"); // NODE ELEMENT
// let btn_show = document.querySelector("#show"); // NODE ELEMENT
// let text = document.querySelector("#text"); // NODE ELEMENT
// btn.addEventListener("click", function () {
//   text.style.display = "none";
// });
// btn_hide.onclick = function () {
//   text.style.display = "none";
// };
// btn_show.ondblclick = function () {
//   text.style.display = "block";
// };

// let btn_both = document.querySelector("#both");
// btn_both.onclick = function () {
//   if (btn_both.innerHTML == "Hide Text") {
//     text.style.display = "none";
//     btn_both.innerHTML = "Show Text";
//   } else {
//     text.style.display = "block";
//     btn_both.innerHTML = "Hide Text";
//   }
// };

let eye = document.querySelector(".pass-wrapper i");
let input = document.querySelector(".pass-wrapper input");
eye.onclick = function () {
  if (input.type == "password") {
    input.type = "text";
    eye.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    eye.classList.replace("fa-eye-slash", "fa-eye");
  }
};
