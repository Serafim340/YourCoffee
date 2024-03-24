const selectors = document.querySelectorAll('img'); //Получение списка селекторов
const blocks = document.querySelectorAll('.selector');//Получение списка блоков
let mainpage = document.getElementById('main')//Объявление главной страницы
selectors.forEach(selector => { //Перебор селекторов
    selector.addEventListener('click', function() { //Событие на клик
        let id = this.getAttribute('data-id'); //Получаем айдишку блока
        let block = document.getElementById(id); //Открываем нужный блок
        const styles = window.getComputedStyle(mainpage)
        //mainpage.replaceWith(block) //замена основной страницы на нажатый блок
        mainpage.innerHTML = block.innerHTML //Замена основной страницы на нажатый блок
        currentState = id; //Сохранение текущего состояния
        //mainpage = document.getElementById(currentState);
    });
});