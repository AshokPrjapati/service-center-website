const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const cross = ()=>{
    nav.classList.toggle("hide");
    menu.classList.toggle("cross");

}
menu.addEventListener('click',cross);
nav.addEventListener('click',cross);