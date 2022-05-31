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
***************************************/
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}
/***************************************
end Анимация (появление блоков при скролле)
***************************************/


/***************************************
Бургер меню
***************************************/
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
   let delay = 500;
   let menuBody = document.querySelector(".nav");
   iconMenu.addEventListener("click", function (e) {
      if (unlock) {
         body_lock(delay);
         iconMenu.classList.toggle("_active");
         menuBody.classList.toggle("_active");
      }
   });
};

function menu_close() {
   let iconMenu = document.querySelector(".icon-menu");
   let menuBody = document.querySelector(".nav");
   iconMenu.classList.remove("_active");
   menuBody.classList.remove("_active");
}
/***************************************
end Бургер меню
***************************************/


console.info('frontend200tb intrid end');
