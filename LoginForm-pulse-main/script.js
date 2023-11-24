const btLeft = document.getElementById('esquerda');
const btRight = document.getElementById('direita');
const slider = document.querySelector('.slider');

btLeft.addEventListener('click', function() {
    slider.style.transform = "translate(-25em,0)"
})

btRight.addEventListener('click', function() {
    slider.style.transform = "translate(0,0)"
})