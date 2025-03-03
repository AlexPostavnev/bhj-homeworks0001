let seconds = 10; // Установите желаемое время в секундах

function updateTimer() {
    const timerDisplay = document.getElementById('timer');
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${hours}:${minutes}:${secs}`;

    if (seconds > 0) {
        seconds--;
    } else {
        clearInterval(timerInterval);
        alert("Вы победили в конкурсе!");
    }
}

const timerInterval = setInterval(updateTimer, 1000);