document.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const { top, bottom } = reveal.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Проверяем, попадает ли элемент в видимую область
        if (top < windowHeight && bottom > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});
