const menu = document.querySelector('#menu-btn');


menu.addEventListener('click', () =>{
    document.querySelector('.options').classList.toggle('active');
    document.querySelector('.options').classList.toggle('close');
    document.querySelector('#menu-btn').classList.remove('fa-bars');
    document.querySelector('#menu-btn').classList.add('fa-close');

});