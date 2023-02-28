import {div} from "./type";

export default function tabs() {
    const parentButtonsTabs: div = document.querySelector(".tabheader__items");
    const buttonsTabs: NodeListOf<HTMLDivElement> = document.querySelectorAll(".tabheader__items .tabheader__item");
    const tabContents: NodeListOf<HTMLDivElement> = document.querySelectorAll(".tabcontainer .tabcontent");
    
    parentButtonsTabs?.addEventListener("click", (event) => {
        const target: HTMLDivElement = (event.target as HTMLDivElement);
    
        if (target.classList.contains("tabheader__item") && !target.classList.contains("tabheader__item_active") ) {
            buttonsTabs.forEach((item, i) => {
                item.classList.remove("tabheader__item_active");
                tabContents[i].classList.remove("activeTab");
    
                if (target === item) {
                    item.classList.add("tabheader__item_active");
                    tabContents[i].classList.add("activeTab");
                }
            });
        }
    });
}