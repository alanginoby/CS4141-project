const ticketContainer = document.querySelector('.tickets-container');

flights.forEach(flight => {
    const flightElement = document.createElement("div");
    flightElement.className = "flights";

    flightElement.innerHTML = `
        <div class="flight-top">
            <div>
                <p class="flight-number">FLIGHT ${flight.flightNumber}</p>
                <h2>${flight.dep_country} to ${flight.arrival_country}</h2>
            </div>
            <span class="flight-class">${flight.class}</span>
        </div>
        <div class="flight-route">
            <div class="flight-location">
                <h1>${flight.depICAO}</h1>
                <h3>${flight.departureTime}</h3>
                <p>${flight.departure}, ${flight.dep_country}</p>
            </div>
            <div class="flight-path">
                <span><ion-icon name="airplane-outline" class="plane"></ion-icon></span>
                <div class="flight-line"></div>
                <p>${flight.flight_changes}</p>
            </div>
            <div class="flight-location destination">
                <h1>${flight.arrICAO}</h1>
                <h3>${flight.arrivalTime}</h3>
                <p>${flight.arrival}, ${flight.arrival_country}</p>
            </div>
        </div>
        <div class="flight-bottom">
            <div class="flight-price">
                <p>Price per ticket</p>
                <h2>€${flight.price.toFixed(2)}</h2>
            </div>
            <button class="book-btn">Book Now</button>
        </div>
    `;
    ticketContainer.appendChild(flightElement);
});