const roomsContainer = document.querySelector(".room-list");

rooms.forEach(room => {
    const roomElement = document.createElement("div");
    roomElement.className = "room";

    roomElement.innerHTML = `
        <div class="room-top">
                <div class="pic">
                    <img src="${room.pic}" class="room-pic">
                </div>
                <div class="details">
                    <p class="beds">Beds: ${room.beds}</p>
                    <p class="toilets">Toilets: ${room.toilets}</p>
                    <p class="rating">Rating: ${room.rate}</p>
                </div>
        </div>
        <div class="line"></div>
        <div class="price">
            <p>€${room.price.toFixed(2)}</p>
            <button class="book">Book now</button>
        </div>
    `;
    roomsContainer.appendChild(roomElement);
});