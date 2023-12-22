var overlay = document.querySelector('.overlay');
var btn = document.querySelector('.btn');
var cros = document.querySelector('.close');
var cont = document.querySelector('.conteiner');

btn.addEventListener ('click', function(event) {
    console.log('да');
    event.preventDefault();
    cont.style.display = 'flex';
    overlay.style.display = 'flex'; 
});

cros.addEventListener('click', function(event) {
    event.preventDefault();
    cont.style.display = 'none';
    overlay.style.display = 'none';
});



