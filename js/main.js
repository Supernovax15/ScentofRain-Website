const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page");

function updateActiveNav() {
  const scrollPosition = window.scrollY + window.innerHeight * 0.35;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.id;

    if (scrollPosition >= top && scrollPosition < bottom) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("load", updateActiveNav);
