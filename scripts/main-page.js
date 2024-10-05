document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const closeBtn = document.getElementById("close-btn");

    // Функция для открытия меню
    menuToggle.addEventListener("click", function() {
        navMenu.style.display = "block"; // Сначала показываем меню
        setTimeout(() => {
            navMenu.classList.add("open"); // Затем добавляем класс для анимации открытия
            menuToggle.classList.add("rotate"); // Добавляем класс для вращения полосок
        }, 10); // Небольшая задержка для отображения
    });

    // Функция для закрытия меню
    closeBtn.addEventListener("click", function() {
        // Добавляем класс для вращения крестика
        closeBtn.classList.add("rotate");

        navMenu.classList.remove("open"); // Убираем класс для анимации закрытия

        // Задержка перед скрытием меню
        setTimeout(() => {
            navMenu.style.display = "none"; // Скрываем меню после анимации
            closeBtn.classList.remove("rotate"); // Убираем класс вращения после скрытия
            menuToggle.classList.remove("rotate"); // Убираем класс вращения у полосок
        }, 500); // Время анимации
    });
});
