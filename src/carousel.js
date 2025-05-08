export const Carousel = (() => {
    const carouselElement = document.querySelector('.carousel');
    const slideELements = carouselElement.querySelectorAll('.slide');
    const circleElements = document.querySelectorAll('.circle');
    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');

    let currentSlideIdx = 0;
    const distance = 500;

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
        
        slideELements[0].classList.toggle('visible');
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
        if (currentSlideIdx == slideELements.length - 1) {
            return;
        }

        slideELements[currentSlideIdx].classList.toggle('visible');
        slideELements[currentSlideIdx + 1].classList.toggle('visible');
        
        const moveDistance = distance * (currentSlideIdx + 1);
        carouselElement.style.transform = `translateX(-${moveDistance}px)`;

        setCircleStyle(currentSlideIdx + 1, currentSlideIdx);

        currentSlideIdx++;
    }

    function previous(distance) {
        if (currentSlideIdx == 0) {
            return;
        }

        slideELements[currentSlideIdx].classList.toggle('visible');
        slideELements[currentSlideIdx - 1].classList.toggle('visible');
        const moveDistance = distance * (currentSlideIdx - 1);
        carouselElement.style.transform = `translateX(-${moveDistance}px)`;

        setCircleStyle(currentSlideIdx - 1, currentSlideIdx);

        currentSlideIdx--;
    }

    function setCircleStyle(prevIdx, currentSlideIdx) {
        circleElements[prevIdx].classList.toggle('on');
        circleElements[currentSlideIdx].classList.toggle('on');
    }
});
