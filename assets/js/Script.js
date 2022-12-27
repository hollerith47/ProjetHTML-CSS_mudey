window.onload = () => {
  const MenuIcon = document.querySelector(".icon-menu");
  const NavBar = document.querySelector(".navBar");
  const links = document.querySelectorAll(".nav-item");

  if (MenuIcon) {
    MenuIcon.addEventListener("click", () => {
      //console.log("icon-menu");
      if (NavBar.style.display === "block") {
        NavBar.style.display = "none";
        NavBar.classList.remove("disparition");
      } else {
        NavBar.style.display = "block";
        console.log("open click");
        if (links.length) {
          links.forEach((link) => {
            link.addEventListener("click", () => {
              NavBar.classList.add("disparition");
            });
          });
        }
      }
    });
  }

  if (links.length) {
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        // NavBar.style.display = "none";
        links.forEach((link) => {
          link.classList.remove("active");
        });
        e.preventDefault();
        link.classList.add("active");
      });
    });
  }
};
