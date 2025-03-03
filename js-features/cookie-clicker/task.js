let score = 0;
let lastClickTime = Date.now();

const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');
const clickSpeedDisplay = document.getElementById('click-speed');

cookie.onclick = function() {
    const currentTime = Date.now();
    const clickSpeed = 1000 / (currentTime - lastClickTime);
    lastClickTime = currentTime;
    
    score++;
    scoreDisplay.textContent = score;
    clickSpeedDisplay.textContent = clickSpeed.toFixed(2);

    const size = Math.random() * 40 + 80; // Размер от 80 до 120
    cookie.style.width = `${size}px`;
    cookie.style.height = `${size}px`;
};
