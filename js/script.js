document.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar-top");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
