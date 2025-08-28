var burger = document.querySelector(".menu-bgm");
var menu = document.querySelector(".menu-down-part");
console.log(menu);
var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};
burger.addEventListener("click", toggleMenu);
