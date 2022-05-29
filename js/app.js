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


console.info('frontend200tb intrid end');
