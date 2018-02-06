// Init fa-bars
let ham = document.querySelector('.fa-bars');
let closeMenu = document.querySelector('.fa-times');

// Add Event 
ham.addEventListener('click', function(e){
    e = document.querySelector('.menu');
    e.classList.add('menu-active')
    
    
});

closeMenu.addEventListener('click', (e) =>{
    e = document.querySelector('.menu');
    e.classList.remove('menu-active');

})