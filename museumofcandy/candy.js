console.log('I am Candy')
var navbar = document.querySelector("body > nav")
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) { 
            navbar.classList.add('nav-bg')
        } 
        else{
            navbar.classList.remove('nav-bg')
        }
    });
});