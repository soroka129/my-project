const leftbtn = document.querySelector ('#left');
const rightbtn = document.querySelector ('#right');
const list = document.querySelector ('.list-slider');

let currentRight = 0;


leftbtn.addEventListener('click', function(event) {
    event.preventDefault();

    if (currentRight > 0) {
        currentRight -= 102;
        list.style.right = `${currentRight}px`;
        }
});

rightbtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (currentRight < 500) {
    currentRight += 102;
    list.style.right = `${currentRight}px`;
    }
    
});
