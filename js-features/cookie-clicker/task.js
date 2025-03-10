let score = 0; // Переменная для хранения количества кликов
let lastClickTime = Date.now(); // Время последнего клика

const cookie = document.getElementById('cookie'); // Получаем элемент печенья
const scoreDisplay = document.getElementById('clicker__counter'); // Получаем элемент для отображения счётчика кликов

// Обработчик события клика по печенью
cookie.onclick = function() {
    const currentTime = Date.now(); // Получаем текущее время
    const clickSpeed = 1000 / (currentTime - lastClickTime); // Рассчитываем скорость клика
    lastClickTime = currentTime; // Обновляем время последнего клика
    
    score++; // Увеличиваем счёт кликов
    scoreDisplay.textContent = score; // Обновляем отображение счётчика кликов

    const size = Math.random() * 40 + 80; // Генерируем случайный размер от 80 до 120
    cookie.style.width = `${size}px`; // Устанавливаем новый размер печенья
    cookie.style.height = `${size}px`; // Устанавливаем новый размер печенья
};
