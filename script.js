function updateTime() {
    const timeElement = document.getElementById('time');
    const timenow = new Date();
    
    const hours = String(timenow.getHours()).padStart(2, '0');
    const minutes = String(timenow.getMinutes()).padStart(2, '0');
    const seconds = String(timenow.getSeconds()).padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

updateTime();
