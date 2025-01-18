const page = document.querySelector(".page");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu__list");
const burger = document.querySelector(".burger");
const requestInvite = document.querySelector(".header__requerst-invite");

function toggleClasses(){
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    page.classList.toggle("active");
}
burger.addEventListener("click", function(event){
        toggleClasses();
})

burger.addEventListener("keypress", function(event){
    if(event.key == 'Enter'){
        toggleClasses();
    }
})