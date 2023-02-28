import { DataCard } from "./type";

export default function card() {
    class Card {
        constructor(
            public parent: Element,
            public src: string,
            public alt: string,
            public title: string,
            public descr: string,
            public price: number,
        ) {}
    
        generate(): void {
            const card: HTMLDivElement = document.createElement("div");
            card.classList.add("menu__item");
            card.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Ціна:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(card);
        }
    }
    
    const parentCard = document.querySelector(".menu__field .container");
    
    if (parentCard) {
        fetch("http://localhost:3000/menu").then((data) => {
            if (data.ok && data.status === 200) {
                return data.json();
            } else {
                parentCard.textContent = "Не вдалось загрузити меню"
            }
        }).then((data) => {
            data.forEach(({img, altimg, title, descr, price}: DataCard) => {
                new Card(parentCard, img, altimg, title, descr, price).generate();
            });
        }).catch(() => {
            parentCard.textContent = "Не вдалось загрузити меню"
        });
    }  
}