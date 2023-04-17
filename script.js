const toggleButton = document.getElementById("js-navbar-toggle");
const navbarMenu = document.getElementById("js-menu");

toggleButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("nav-active");
});
