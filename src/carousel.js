
const carouselElement = document.querySelector('.carousel');
const slideELements = carouselElement.querySelectorAll('.slide');

slideELements[0].classList.toggle('visible');

function next(distance, currentSlideIdx) {
    if (currentSlideIdx == slideELements.length - 1) {
        return currentSlideIdx;
    }
    console.log(currentSlideIdx);
    slideELements[currentSlideIdx].classList.toggle('visible');
    slideELements[currentSlideIdx + 1].classList.toggle('visible');
    const moveDistance = distance * (currentSlideIdx + 1);
    console.log(moveDistance);
    carouselElement.style.transform = `translateX(-${moveDistance}px)`;

    return currentSlideIdx + 1;
}

function previous(distance, currentSlideIdx) {
    if (currentSlideIdx == 0) {
        return currentSlideIdx;
    }

    console.log(carouselElement.getBoundingClientRect().left);

    slideELements[currentSlideIdx].classList.toggle('visible');
    slideELements[currentSlideIdx - 1].classList.toggle('visible');
    const moveDistance = distance * (currentSlideIdx - 1);
    carouselElement.style.transform = `translateX(-${moveDistance}px)`;

    return currentSlideIdx - 1;
}

export {next, previous};