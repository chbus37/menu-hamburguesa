import hamburgerMenu from "./dom/app.js";

hamburgerMenu

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn",".panel", ".menu a");
});

