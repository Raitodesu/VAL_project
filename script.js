window.onload = function(){
    const menu_btn = document.querySelector('.hamburger-menu');
    const nav_menu = document.querySelector('.navcontainer');
    const blur_bg = document.querySelector('.blur-background')
    
    function toggleActive(){
        menu_btn.classList.toggle('is-active');
        nav_menu.classList.toggle('is-active');
        blur_bg.classList.toggle('is-active');
    }
    
    function toggleDeactivate(){
        menu_btn.classList.remove('is-active')
        blur_bg.classList.remove('is-active')
        nav_menu.classList.remove('is-active')
    }

    menu_btn.addEventListener('click', function(){
        toggleActive();
    });

    blur_bg.addEventListener('click', function(){
        toggleDeactivate();
    })
}
