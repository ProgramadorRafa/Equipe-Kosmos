const openMenuBtn = document.querySelector('.openMenu');
let closeMenuBtn = document.querySelector('.closeMenu');

function menuShow() {
    let menuMobile = document.querySelector('.menuList');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open');
    }
}

openMenuBtn.addEventListener('click', menuShow);
closeMenuBtn.addEventListener('click', menuShow);