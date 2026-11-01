// Переключение класса при тапе на элемент
document.querySelectorAll('.element').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('is-selected');
    });
});
