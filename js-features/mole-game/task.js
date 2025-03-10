let score = 0; // Счет игрока
let missed = 0; // Количество промахов
const maxScore = 10; // Максимальное количество кротов для победы
const maxMissed = 5; // Максимальное количество промахов для проигрыша
let moleTimer; // Таймер для появления крота

// Функция для получения лунки по индексу
function getHole(index) {
    return document.getElementById(`hole${index}`);
}

// Функция для появления крота в случайной лунке
function showMole() {
    const randomIndex = Math.floor(Math.random() * 9) + 1; // Случайное число от 1 до 9
    const hole = getHole(randomIndex);
    hole.classList.add('hole_has-mole');

    // Убираем крота через 1 секунду
    setTimeout(() => {
        hole.classList.remove('hole_has-mole');
    }, 1000);
}

// Функция для обработки клика по лунке
function handleHoleClick(event) {
    const hole = event.currentTarget;

    if (hole.classList.contains('hole_has-mole')) {
        score++;
        document.getElementById('dead').textContent = score; // Обновляем счётчик убитых кротов
        hole.classList.remove('hole_has-mole'); // Убираем крота
    } else {
        missed++;
        document.getElementById('lost').textContent = missed; // Обновляем счётчик промахов
    }

    // Проверка на победу или поражение
    if (score >= maxScore) {
        alert('Поздравляем! Вы победили!');
        resetGame();
    } else if (missed >= maxMissed) {
        alert('Вы проиграли! Попробуйте снова.');
        resetGame();
    }
}

// Функция для сброса игры
function resetGame() {
    score = 0;
    missed = 0;
    document.getElementById('dead').textContent = score; // Сбрасываем счётчик убитых кротов
    document.getElementById('lost').textContent = missed; // Сбрасываем счётчик промахов
    clearInterval(moleTimer); // Останавливаем таймер
}

// Регистрация обработчиков событий для каждой лунки
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.onclick = handleHoleClick;
}

// Запускаем игру
moleTimer = setInterval(showMole, 1500); // Появление крота каждые 1.5 секунды