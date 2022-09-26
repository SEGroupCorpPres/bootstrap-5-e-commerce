const drawerMenu = document.getElementById('drawer-menu');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(drawerMenu){
    drawerMenu.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
