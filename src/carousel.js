export const Carousel = (() => {
    const carouselElement = document.querySelector('.carousel');
    const slideElements = carouselElement.querySelectorAll('.slide');
    const circleElements = document.querySelectorAll('.circle');
    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');

    let currentSlideIdx = 0;
    const distance = 500;
    let timer = window.setInterval(timeSlideshow, 5000);

    leftBtn.addEventListener('click', () => {
        previous(distance);
    });

    rightBtn.addEventListener('click', () => {
        next(distance);
    });

    function setUp() {
        for (let i = 0; i < circleElements.length; i++) {
            circleElements[i].setAttribute('data-idx', i);
            circleElements[i].addEventListener('click', handleCircleClick);
        }
        
        slideElements[0].classList.toggle('visible');
        circleElements[0].classList.toggle('on');    
    }

    setUp();

    function handleCircleClick(event) {
        const circleElementIdx = event.target.getAttribute('data-idx');
        
        if (circleElementIdx == currentSlideIdx) {
            return;
        }

        if (circleElementIdx > currentSlideIdx) {
            for (let i = currentSlideIdx; i < circleElementIdx; i++) {
                next(distance);
            }
        }

        if (circleElementIdx < currentSlideIdx) {
            for (let i = currentSlideIdx; i > circleElementIdx; i--) {
                previous(distance);
            }
        }
    }

    function next(distance) {
        if (currentSlideIdx == slideElements.length - 1) {
            return;
        }

        slideElements[currentSlideIdx].classList.toggle('visible');
        slideElements[currentSlideIdx + 1].classList.toggle('visible');
        
        const moveDistance = distance * (currentSlideIdx + 1);
        carouselElement.style.transform = `translateX(-${moveDistance}px)`;

        setCircleStyle(currentSlideIdx + 1, currentSlideIdx);

        currentSlideIdx++;

        window.clearInterval(timer);
        timer = window.setInterval(timeSlideshow, 5000);
    }

    function previous(distance) {
        if (currentSlideIdx == 0) {
            return;
        }

        slideElements[currentSlideIdx].classList.toggle('visible');
        slideElements[currentSlideIdx - 1].classList.toggle('visible');
        const moveDistance = distance * (currentSlideIdx - 1);
        carouselElement.style.transform = `translateX(-${moveDistance}px)`;

        setCircleStyle(currentSlideIdx - 1, currentSlideIdx);

        currentSlideIdx--;

        window.clearInterval(timer);
        timer = window.setInterval(timeSlideshow, 5000);
    }

    function setCircleStyle(prevIdx, currentSlideIdx) {
        circleElements[prevIdx].classList.toggle('on');
        circleElements[currentSlideIdx].classList.toggle('on');
    }

    function timeSlideshow() {
        if (currentSlideIdx != slideElements.length - 1) {
            next(distance);
        }
        else {
            for (let i = 0; i < slideElements.length; i++) {
                previous(distance);
            }
        }
    }
    
});
