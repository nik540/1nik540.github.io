// Переключение класса при тапе на элемент
//document.querySelectorAll('.element').forEach(item => {
  //  item.addEventListener('click', () => {
  //      item.classList.toggle('is-selected');
  //  });
//});

// Ждем полную загрузку DOM-дерева
document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("units");
    
    if (target) {
        // Скроллим к элементу. 
        // inline: "center" выравнивает элемент ровно по центру экрана
        target.scrollIntoView({ behavior: "auto", inline: "center" });
    }
});

// const editor = document.querySelector('[contenteditable="true"]');

// editor.addEventListener('paste', (e) => {
//   // Отменяем стандартную вставку с HTML
//   e.preventDefault();

//   // Получаем только чистый текст из буфера обмена
//   const text = (e.clipboardData || window.clipboardData).getData('text/plain');

//   // Вставляем текст в текущую позицию курсора
//   const selection = window.getSelection();
//   if (!selection.rangeCount) return;

//   selection.deleteFromDocument();
//   selection.getRangeAt(0).insertNode(document.createTextNode(text));
  
//   // Перемещаем курсор в конец вставленного текста
//   selection.collapseToEnd();
// });
