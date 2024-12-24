import "./styles.css";
import { firstFunction } from "./first.js";
import { secondFunction } from "./second.js";
import { thirdFunction } from "./third.js";

const content = document.querySelector('#content');
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

firstFunction()

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    firstFunction();
});

menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    secondFunction();
});

aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
    thirdFunction();
});
