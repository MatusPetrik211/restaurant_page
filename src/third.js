
export function thirdFunction() {
    const content = document.querySelector("#content");
    const text = document.createElement("p");

    text.textContent = "As I already said .This is the best restaurant in the whole world. No restaurant is better than this. We have the best foods best staff and best everything :D."
    text.setAttribute("font-weight", "bold");

    content.appendChild(text);
}