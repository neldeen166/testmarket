let nav = document.querySelector(".nav");

window.onscroll = pageScroll;

function pageScroll() {
  if (this.scrollY >= 500) {
    nav.classList.add("nav1")
  } else {
    nav.classList.remove("nav1")

  }
}