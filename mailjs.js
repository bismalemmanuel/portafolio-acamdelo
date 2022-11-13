const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".menu");
const aChildrens = menu.children;

iconMenu.addEventListener("click", function () {
    console.log(menu.classList.toggle("menu-show"));
    });

for (let item of aChildrens) {
    item.addEventListener("click", function () {
        console.log(menu.classList.toggle("menu-show"));
    });
    
}
