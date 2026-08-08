import css from "./style.css";

const lightBulb = document.querySelector("#lightBulb");
const themeButton = document.querySelector("#theme");


const isLightMode = window.matchMedia("(prefers-color-scheme: light)");
changeTheme(isLightMode.matches)



isLightMode.addEventListener("change", event => {
    changeTheme(event.matches)
})


themeButton.addEventListener("click", () => {
    const isWhitetheme = lightBulb.classList.contains("off")
    changeTheme(!isWhitetheme)
})


function changeTheme(theme) {
    lightBulb.classList.toggle("off", theme)
    document.body.classList.toggle("lightTheme", theme)
    themeButton.setAttribute("aria-pressed",!theme);
    themeButton.setAttribute(
      "aria-description",
      theme ? "light theme is on" : "dark theme is on",
    );
}