console.info('frontend200tb intrid start');


/***************************************
Ссылка меню становится активная по клику
***************************************/
// Ссылки меню
const navLinks = document.querySelector('.nav__links');
console.log(navLinks);
const navLink = document.querySelectorAll('.nav__link');
console.log(navLink);

// Обработчик клика по ссылке меню
const navActive = (e) => {
  navLink.forEach((elem) => {
     elem.classList.remove('_active')
  });
  e.target.classList.add('_active');
  console.log(e.target)

};


// Событие клика по меню
navLinks.addEventListener('click', navActive);
/*******************************************
end Ссылка меню становится активная по клику
*******************************************/


/***************************************
Анимация (появление блоков при скролле)
Каждый элемент (с классом animation-element) который должен появляться помещаем в свой контейнер (с классом animation-container) и следим за контейнером. Когда контейнер появляется в окне браузера при скролле - элемент появляется. Когда контейнер исчезает - элемент исчезает, чтобы анимация потом повторилась
***************************************/
function onEntry(entry) {
  entry.forEach(change => {
    const animElem = change.target.querySelector('.animation-element');
    //по умолчанию проверяется на пересечение с окном браузера
    if (change.isIntersecting) {
      animElem.classList.add('element-show');
    } else {
      animElem.classList.remove('element-show');
    }
  });
}

//создаем наблюдателя
let observer = new IntersectionObserver(onEntry);
let elements = document.querySelectorAll('.animation-container');
for (let elm of elements) {
  //сообщаем наблюдателю какие элементы надо отслеживать
  observer.observe(elm);
}
/***************************************
end Анимация (появление блоков при скролле)
***************************************/


/***************************************
Бургер меню
***************************************/
let iconMenu = document.querySelector(".icon-menu");
let menuBody = document.querySelector(".nav");
if (iconMenu != null) {
  let delay = 500;
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
   });
};

function menu_close() {
  console.info('клик по ссылке');
   iconMenu.classList.remove("_active");
   menuBody.classList.remove("_active");
}

// Событие клика по меню
navLinks.addEventListener('click', menu_close);

/***************************************
end Бургер меню
***************************************/


/***************************************
Модальное окно
***************************************/
let popupBg = document.querySelector('.modal'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопки для скрытия окна
let closeBtnPopupButton = document.querySelector('.btn-popup'); // Кнопки для скрытия окна


//Открытие модального окна при клике на Подписаться
openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active');
  })
});

//Закрытие модального окна при клике на крестик
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active');
});

//Закрытие модального окна при клике на OK
closeBtnPopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active');
});

//Закрытие модального окна при клике фон
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active');
  }
});

//Закрытие модального окна по клавише ESC
document.addEventListener('keyup', (e) => { // Вешаем обработчик на весь документ
  if(e.key === 'Escape') { // Если нажата клавиша ESC, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active');
  }
});
/***************************************
end Модальное окно
***************************************/


console.info('frontend200tb intrid end');
