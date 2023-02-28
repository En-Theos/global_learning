import {div} from "./type";
 
export default function modal() {
    const modal: div = document.querySelector(".modal");
    const btnCloseModal: div = document.querySelector("[data-close]");
    const btnsShowModal: NodeListOf<HTMLDivElement> = document.querySelectorAll("[data-modal]");
    
    let timerShowModal: NodeJS.Timeout = setTimeout(() => {if (modal) modal.style.display = "block"}, 300000);
    
    btnsShowModal.forEach(button => {
        button.addEventListener("click", () => {
            showModal(modal, timerShowModal);
        });
    });
    
    btnCloseModal?.addEventListener("click", () => {
        hideModal(modal, timerShowModal);
    });
    
    modal?.addEventListener("click", (event) => {
        const target: HTMLDivElement = (event.target as HTMLDivElement);
    
        if (target.classList.contains("modal")) {
        hideModal(modal, timerShowModal);
        }
    });
    
    window.addEventListener("scroll", function fun() {
        const top: number = document.documentElement.scrollTop;
        const wind: number = document.documentElement.clientHeight;
        const allScroll: number = document.documentElement.scrollHeight;
    
        if (top + wind >= allScroll - 1) {
            showModal(modal, timerShowModal);
            window.removeEventListener("scroll", fun);
        }
    });
}

export function showModal(modal: div, timerShowModal: NodeJS.Timeout): void {
    if (modal) modal.style.display = "block";
    clearTimeout(timerShowModal);
}

export function hideModal(modal: div, timerShowModal: NodeJS.Timeout): void {
    if (modal) {
        modal.style.display = "none"
        modal.querySelector("p.modal__title")?.remove();
        const form = modal.querySelector("form");
        clearTimeout(timerShowModal);
        
        if (form) {
            form.style.display = "block";
        }
    };
}