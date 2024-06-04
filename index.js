const navlinks = document.querySelectorAll(".link");
navlinks.forEach((navlink) => {
  navlink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".active")?.classList.remove("active");
    navlink.classList.add("active");
  });
});
