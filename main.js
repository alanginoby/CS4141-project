const homeBtn = document.querySelector(".home-btn");
const europeBtn = document.querySelector(".euro-btn");
const flightBtn = document.querySelector(".flight-btn");
const flightBtn2 = document.querySelector(".plane-btn");

homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

europeBtn.addEventListener("click", () => {
    window.location.href = "destinations.html";
});

flightBtn.addEventListener("click", () => {
    window.location.href = "flight.html";
});

flightBtn2.addEventListener("click", () => {
    window.location.href = "flight.html";
});