import { showModal, hideModal } from "./modal";
import { div } from "./type";

export default function form() {
    const form: NodeListOf<HTMLFormElement> = document.querySelectorAll("form"); 
    let timerShowModal: NodeJS.Timeout;

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const loadImg: HTMLImageElement = document.createElement("img");
            loadImg.src = "../img/spinner.svg";
            loadImg.style.display = "block";
            loadImg.style.margin = "0 auto";
            item.insertAdjacentElement("beforeend" , loadImg);
        
            const formData: FormData = new FormData(item);
        
            let postJSON: {
                name: string,
                phone: string
            } = {
                name: "",
                phone: ""
            };
        
            formData.forEach((value, key) => {
                switch (key) {
                    case "name":
                        postJSON.name = value.toString();
                        break;
                    case "phone":
                        postJSON.phone = value.toString();
                        break;
                }
            });

            fetch("http://localhost:3000/requests", {
                method: "POST", 
                headers: {
                    "Content-type": "aplication/json"
                }, 
                body: JSON.stringify(postJSON)
            }).then((data) => {
                if (data.ok && data.status === 200) {
                    generateMessage("Відправлено");
                    item.reset();
                    return data.text();
                }
            }).then((data) => {
                console.log(data);
            }).catch(() => {
                generateMessage("Помилка");
            }).finally(() => {
                loadImg.remove();
            });
        });
    });

    const generateMessage = (message: string) => {
        const modal: div = document.querySelector(".modal");

        showModal(modal, timerShowModal);
        const form = modal?.querySelector("form");
        if (form && modal) {
            form.style.display = "none";
            modal.querySelector(".modal__content")?.insertAdjacentHTML("afterbegin" ,`<p class="modal__title">${message}</p>`);
        
            timerShowModal = setTimeout(() => {
                hideModal(modal, timerShowModal);
            }, 3000);
        }
    }
}