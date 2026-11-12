const homeBtn = document.querySelector(".home-btn");
const europeBtn = document.querySelector(".euro-btn");
const flightBtn = document.querySelector(".flight-btn");
const flightBtn2 = document.querySelector(".plane-btn");
const aboutBtn = document.querySelector(".about-btn");
const packageBtn = document.querySelector(".case-btn");

homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

europeBtn.addEventListener("click", () => {
    window.location.href = "destinations.html";
});

flightBtn.addEventListener("click", () => {
    window.location.href = "flight.html";
});

aboutBtn.addEventListener("click", () => {
    window.location.href = "about.html";
});

if (flightBtn2 != null) {
    flightBtn2.addEventListener("click", () => {
        window.location.href = "flight.html";
    });
}

if(packageBtn != null){
    packageBtn.addEventListener("click", () => {
        window.location.href = "package.html";
    });
}
