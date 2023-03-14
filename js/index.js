const btnMenu = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.header__item');

btnMenu.addEventListener('click', openMenu);

function openMenu() {
    menu.classList.toggle('active');

}

let strokesArr = document.querySelectorAll('.stroke');

document.querySelector('.hamburger-icon').addEventListener('click', function () {
    strokesArr.forEach(function (el) {
        console.log(el.classList);
        el.classList.toggle('active');
    });
});