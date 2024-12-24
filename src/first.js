import restaurantImg from "./pexels-pixabay-260922.jpg";

export function firstFunction() {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    const image = document.createElement("img");
    const text = document.createElement("p");

    header.textContent = "Restaurant";
    text.textContent = "This is the best restaurant in the whole world. No restaurant is better than this. We have the best foods best staff and best everything :D";

    image.src = restaurantImg;
    image.setAttribute("alt", "image of restaurant");
    image.setAttribute("width", "500px");


    content.appendChild(header);
    content.appendChild(image);
    content.appendChild(text);
}

//random comment