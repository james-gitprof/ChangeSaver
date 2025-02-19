import "./main.css";
import { Icons } from "./icons";

const hamburgerElement = document.getElementById("mobile-nav-menu") as HTMLSpanElement;

class App {

  start() {
    this.initializeContents();
  }

  initializeContents() {
    hamburgerElement.innerHTML = Icons.SVG_HAMBURGER;
  }
}

const app = new App();
app.start();
