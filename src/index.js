import "./styles.css";
import {next, previous} from './carousel.js';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

let currentSlideIdx = 0;

const distance = 500;

leftBtn.addEventListener('click', () => {
  currentSlideIdx = previous(distance, currentSlideIdx);
});

rightBtn.addEventListener('click', () => {
  currentSlideIdx = next(distance, currentSlideIdx);
});
