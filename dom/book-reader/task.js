document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const textColorLinks = document.querySelectorAll('.color[data-text-color]');
    const bgColorLinks = document.querySelectorAll('.color[data-bg-color]');

    // Функция для изменения размера шрифта
    fontSizeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // предотвращаем переход по ссылке
            fontSizeLinks.forEach(link => link.classList.remove('font-size_active')); // убираем активный класс
            link.classList.add('font-size_active'); // добавляем активный класс к текущему элементу

            const size = link.dataset.size; // получаем размер из data-атрибута
            book.classList.remove('book_fs-small', 'book_fs-big'); // удаляем старые классы
            if (size === 'small') {
                book.classList.add('book_fs-small'); // добавляем класс для маленького шрифта
            } else if (size === 'big') {
                book.classList.add('book_fs-big'); // добавляем класс для большого шрифта
            }
        });
    });

    // Функция для изменения цвета текста
    textColorLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            textColorLinks.forEach(link => link.classList.remove('color_active')); // убираем активный класс
            link.classList.add('color_active'); // добавляем активный класс к текущему элементу

            const color = link.dataset.textColor; // получаем цвет из data-атрибута
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke'); // удаляем старые классы
            book.classList.add(`book_color-${color}`); // добавляем новый класс
        });
    });

    // Функция для изменения цвета фона
    bgColorLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            bgColorLinks.forEach(link => link.classList.remove('color_active')); // убираем активный класс
            link.classList.add('color_active'); // добавляем активный класс к текущему элементу

            const bgColor = link.dataset.bgColor; // получаем цвет фона из data-атрибута
            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white'); // удаляем старые классы
            book.classList.add(`book_bg-${bgColor}`); // добавляем новый класс
        });
    });
});