// Переключение класса при тапе на элемент
//document.querySelectorAll('.element').forEach(item => {
  //  item.addEventListener('click', () => {
  //      item.classList.toggle('is-selected');
  //  });
//});

// Ждем полную загрузку DOM-дерева
document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("target-item");
    
    if (target) {
        // Скроллим к элементу. 
        // inline: "center" выравнивает элемент ровно по центру экрана
        target.scrollIntoView({ behavior: "auto", inline: "center" });
    }
});