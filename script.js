window.onload = function(){
    const menu_btn = document.querySelector('.hamburger-menu');
    const nav_menu = document.querySelector('.navcontainer');
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        nav_menu.classList.toggle('is-active');
    });
}
