function updateClock() {
    const clockElement = document.getElementById('digitalClock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}