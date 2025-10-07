import "./style/main.css";

type Settings = {
  siteToggleables: Record<string, boolean>;
}

class App {

  private hamburgerMenu = document.getElementById("hamburger") as HTMLDivElement;
  private darkModeSwitch = document.getElementById("DM-Switch")!;
  private siteSettings: Settings = { siteToggleables: {} };

  constructor() {
    this.InitStartupSettings();
    this.InitListeners();
  }

  InitListeners() {
    this.darkModeSwitch.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("siteSettings", JSON.stringify(
        {
          siteToggleables: {
            darkMode: document.body.classList.contains("dark")
          },
        }
      ));
    });

    this.hamburgerMenu.addEventListener("click", e => {
      const element = e.currentTarget as HTMLDivElement;
      element.classList.toggle("open");
    });
  }

  InitStartupSettings() {
    this.siteSettings = this.GetSettings();
    const { siteToggleables: { darkMode } } = this.siteSettings
    if (darkMode) {
      document.body.classList.add("dark");
    }
  }

  GetSettings() {
    const localStore = localStorage.getItem("siteSettings");
    if (localStore) {
      return JSON.parse(localStore) as Settings;
    }
    return { siteToggleables: {} } as Settings;
  }
}

new App();