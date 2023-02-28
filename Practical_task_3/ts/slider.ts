import { div, span } from "./type";

export default function slider() {
    const sliderType: div = document.querySelector(".tapeSlide");
    const slides: NodeListOf<HTMLDivElement> = document.querySelectorAll(".offer__slide");
    const sliderNavigation: div = document.querySelector(".navigationSlider");

    const buttonPrev: div = document.querySelector(".offer__slider-prev");
    const buttonNext: div = document.querySelector(".offer__slider-next");

    const currentSlideBox: span = document.querySelector("#current");
    const totalSlideBox: span = document.querySelector("#total");

    const widthSlide: number = parseInt(window.getComputedStyle(slides[0]).width);
    let currentSlide: number = 0;
    if (totalSlideBox) {
        totalSlideBox.textContent = "0" + slides.length;
    }

    const navigableElements: HTMLDivElement[] = [];

    for (const _ of slides) {
        const navElement = document.createElement("div");
        navElement.classList.add("navBtn");
        sliderNavigation?.append(navElement);
        navigableElements.push(navElement);
    }
    navigableElements[0].classList.add("activeNavBtn");

    function switchSlide(step: number): void {
        currentSlide += step;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide > slides.length - 1) {
            currentSlide = 0;
        }

        navigableElements.forEach(elem => elem.classList.remove("activeNavBtn"));
        navigableElements[currentSlide].classList.add("activeNavBtn");

        if (sliderType && currentSlideBox) {
            currentSlideBox.textContent = currentSlide < 9 ? "0" + (currentSlide + 1) : (currentSlide + 1) + "";;
            sliderType.style.transform = `translateX(-${currentSlide * widthSlide}px)`;
        }
    }

    buttonPrev?.addEventListener("click", () => {
        switchSlide(-1);
    });

    buttonNext?.addEventListener("click", () => {
        switchSlide(1);
    });

    navigableElements.forEach((element, index) => {
        element.addEventListener("click", () => {
            currentSlide = 0;
            switchSlide(index);
        });
    });
}