const menu = document.querySelector('#menu-btn');


menu.addEventListener('click', () =>{
    document.querySelector('.navbaar').classList.toggle('active');
    document.querySelector('.navbaar').classList.toggle('close');
    document.querySelector('#menu-btn').classList.remove('fa-bars');
    document.querySelector('#menu-btn').classList.add('fa-close');

});