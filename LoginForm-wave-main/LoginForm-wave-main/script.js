
const userField = document.querySelector('#user');
const form = document.querySelector('.form');

userField.addEventListener("focus", function() {
    form.style.opacity = "0";
})


