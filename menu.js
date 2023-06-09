const ipad = window.matchMedia('screen and (max-width: 768px)');
const menu = document.querySelector('.menu');

const icon = document.querySelector('#menu');

ipad.addListener(validation);
 
function validation(event) {
    if (event.matches) {
        icon.addEventListener('click', hideShow);
        menu.addEventListener('click', hideShow);
    } else {
        icon.removeEventListener('click', hideShow);
        menu.removeEventListener('click', hideShow);
    }
}

validation(ipad);

function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}