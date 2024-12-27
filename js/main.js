// loading animition
let nameN = document.querySelectorAll("a");
nameN.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent immediate navigation
    document.getElementById("loadingOverlay").style.display = "flex"; // Show overlay
    const url = this.getAttribute("href");
    window.location.href = url; // Navigate after a brief delay
  });
});

const bar = document.querySelector(".bars");
const menu = document.querySelector(".menu-togler");

bar.addEventListener("click", () => {
  if (menu.style.height == "0px") {
    menu.style.height = "fit-content";
  } else {
    menu.style.height = "0px";
  }
});

const contain = document.getElementById("inside-list-container");
const inside = document.getElementById("inside-list");

contain.addEventListener("click", () => {
  if (inside.style.display == "none") {
    inside.style.display = "block";
    contain.style.color = "rgb(255, 110, 57)";
  } else {
    inside.style.display = "none";
    contain.style.color = "";
  }
});
