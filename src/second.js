import restaurantMenu from "./menu.png"

export function secondFunction() {
    const content = document.querySelector('#content');
    const menu = document.createElement("img");

    menu.src = restaurantMenu;
    menu.setAttribute("width", "500px");
    menu.setAttribute("alt", "image of menu");

    content.appendChild(menu);
}