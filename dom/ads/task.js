document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;

        function changeCase() {
            // Скрываем текущее объявление
            cases[currentIndex].classList.remove('rotator__case_active');

            // Переходим к следующему объявлению
            currentIndex = (currentIndex + 1) % cases.length;

            // Получаем скорость и цвет нового объявления
            const nextCase = cases[currentIndex];
            const speed = parseInt(nextCase.getAttribute('data-speed'), 10);
            const color = nextCase.getAttribute('data-color');

            // Устанавливаем цвет текста
            nextCase.style.color = color;

            // Показываем новое объявление
            nextCase.classList.add('rotator__case_active');

            // Запускаем следующий вызов с учетом скорости
            setTimeout(changeCase, speed);
        }

        // Запускаем первый вызов функции
        changeCase();
    });
});