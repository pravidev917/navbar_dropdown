const menuicon=document.querySelector(".menu-icon");
const menu=document.querySelector(".menu");
const apps=document.querySelector(".apps")
const apps_item=document.querySelector(".apps-items")
const slides=document.querySelector(".slides")
const slide_item=document.querySelector(".slides-items")
const accounts=document.querySelector(".accounts")
const acc_item=document.querySelector(".acc-items")
menuicon.addEventListener("click", function(){
    menu.classList.toggle("show");
});
apps.addEventListener("click", function(){
    apps_item.classList.toggle("show");

    slide_item.classList.remove("show");
    acc_item.classList.remove("show");
});
slides.addEventListener("click", function(){
    slide_item.classList.toggle("show");

    apps_item.classList.remove("show");
    acc_item.classList.remove("show");

});
accounts.addEventListener("click", function(){
    acc_item.classList.toggle("show");

    apps_item.classList.remove("show");
    slide_item.classList.remove("show");
});
