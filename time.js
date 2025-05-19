function updateDateTime() {
    const dateTimeDisplay = document.getElementById("dateTimeDisplay");
    const now = new Date();
    dateTimeDisplay.textContent = now.toLocaleTimeString();

}

setInterval(updateDateTime, 1000);