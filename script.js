document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        sections.forEach((section) => {
          section.classList.remove("show");
          if (section.id === targetId) {
            section.classList.add("show");
          }
        });
      });
    });
  });
  