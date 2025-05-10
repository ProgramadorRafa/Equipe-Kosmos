let openMenuBtn = document.querySelector('.openMenu');
// let closeMenuBtn = document.querySelector('.closeMenu');
let iconMenuMobile = document.querySelector('.iconChange');


console.log(iconMenuMobile.classList.value)



function menuShow() {
    let menuMobile = document.querySelector('.menuList');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open');
    }
}
openMenuBtn.addEventListener('click', menuShow);

const adicaoFctCloseMenu = () => {
    let menuMobile = document.querySelectorAll('.itemMenu');

    menuMobile.forEach((itensMenu) => {
        itensMenu.addEventListener('click', menuShow);
        console.log('clicou')
    })
}
openMenuBtn.addEventListener('click', adicaoFctCloseMenu);


// CRIAR FUNCTION QUE USA O TOGGLE