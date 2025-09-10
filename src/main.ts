import "./style/main.css";


const hamburgerMenu = document.getElementById("hamburger") as HTMLDivElement;
const darkModeSwitch = document.getElementsByClassName("DM-Switch");

// const header = document.getElementById("main-header") as HTMLElement;

// Event bubbler capturer
// SCRAPPED: Clicking the switch doesn't return the correct element i.e. inaccurate element bubbling

// header.addEventListener("click", e => {
//   const elementID = (e.target as HTMLElement).id;
//   console.log(elementID, e.target);
//   if (elementID === DARK_MODE_ID) {
//     document.body.classList.toggle("dark");
//   }
// })

Array.from(darkModeSwitch).forEach(element => element.addEventListener("click", () => document.body.classList.toggle("dark")));

hamburgerMenu.addEventListener("click", e => {
  const element = e.currentTarget as HTMLDivElement;
  element.classList.toggle("open");
});


