window.onload = () => {
  const MenuIcon = document.querySelector(".icon-menu");
  const NavBar = document.querySelector(".navBar");
  const links = document.querySelectorAll(".nav-item");

  if (MenuIcon) {
    MenuIcon.addEventListener("click", () => {
      console.log("icon-menu");
      if (NavBar.style.display === "block") {
        NavBar.style.display = "none";
      } else {
        NavBar.style.display = "block";
      }
      // NavBar.style.display = 'none';
    });
  }

  if (links.length) {
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        links.forEach((link) => {
          link.classList.remove("active");
        });
        e.preventDefault();
        link.classList.add("active");
      });
    });
  }
};
