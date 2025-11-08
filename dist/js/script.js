const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 500) {
    scrollUp.classList.add("scroll-active");
  } else {
    scrollUp.classList.remove("scroll-active");
  }
});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  const isMenuOpen = menu.contains("show");

  if (isMenuOpen) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    if (!isClickInsideMenu && !isClickOnToggle) {
      menu.classList.remove("show");
    }
  }
});
