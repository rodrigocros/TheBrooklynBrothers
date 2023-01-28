const menu = document.querySelector('#menu-btn');


menu.addEventListener('click', () =>{
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('close');
    document.querySelector('#menu-btn').classList.remove('fa-bars');
    document.querySelector('#menu-btn').classList.add('fa-close');

});