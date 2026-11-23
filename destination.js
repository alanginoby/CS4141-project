function showContinent(name) {
    const sections = document.querySelectorAll(".continent");

    for (let i = 0; i < sections.length; i++) {
        if (name === "all" || sections[i].id === name) {
            sections[i].style.display = "block";
        } else {
            sections[i].style.display = "none";
        }
    }
}

const menuBtn = document.querySelector(".menu-btn");
const menuPanel = document.querySelector(".menu-panel");

menuBtn.addEventListener("click", function () {
    menuPanel.classList.toggle("open");
});