var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}
// Mobile dropdown menus
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".mobile-dropdown-toggle");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function () {
      const parent = this.parentElement;
      const menu = parent.querySelector(".dropdown-menu");
      const arrow = this.querySelector(".dropdown-arrow");

      parent.classList.toggle("open");

      if (parent.classList.contains("open")) {
        menu.style.display = "block";
        arrow.textContent = "▲";
      } else {
        menu.style.display = "none";
        arrow.textContent = "▼";
      }
    });
  });
});