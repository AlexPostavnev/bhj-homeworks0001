document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');

        // Открытие/закрытие списка
        value.addEventListener('click', () => {
            list.classList.toggle('dropdown__list_active');
        });

        // Обработка клика по элементам списка
        const items = dropdown.querySelectorAll('.dropdown__item');

        items.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); // Запрет перехода по ссылке
                value.textContent = item.textContent; // Установка нового значения
                list.classList.remove('dropdown__list_active'); // Закрытие списка
            });
        });

        // Закрытие списка при клике вне его
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                list.classList.remove('dropdown__list_active');
            }
        });
    });
});