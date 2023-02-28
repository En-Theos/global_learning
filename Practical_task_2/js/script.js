"use strict";
var _a;
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против "
    ]
};
document.querySelectorAll(".promo__adv img").forEach(item => item.remove());
let genre = document.querySelector(".promo__content .promo__bg .promo__genre");
if (genre instanceof HTMLDivElement) {
    genre.textContent = "ДРАМА";
}
let poster = document.querySelector(".promo__content .promo__bg");
if (poster instanceof HTMLDivElement) {
    poster.style.background = "url('./img/bg.jpg') center center/cover no-repeat";
}
let parentFilms = document.querySelector(".promo__interactive .promo__interactive-list");
function generateList() {
    if (parentFilms instanceof Element) {
        parentFilms.innerHTML = '';
        movieDB.movies.forEach((item, i) => {
            parentFilms.innerHTML += `
                <li class="promo__interactive-item">${i + 1}: ${item.length > 21 ? item.slice(0, 21) + '...' : item}
                    <div class="delete"></div>
                </li>
            `;
        });
        parentFilms.querySelectorAll(".promo__interactive-item .delete").forEach((item, i) => {
            item.addEventListener("click", () => {
                var _a;
                (_a = item.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                movieDB.movies.splice(i, 1);
                generateList();
            });
        });
    }
}
generateList();
let formAddFilm = document.querySelector("form.add ");
if (formAddFilm instanceof Element) {
    (_a = formAddFilm.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
        e.preventDefault();
        let input = formAddFilm.querySelector(".adding__input");
        if (input instanceof HTMLInputElement && input.value.trim() !== "") {
            let check = formAddFilm.querySelector("[type='checkbox']");
            if (check === null || check === void 0 ? void 0 : check.checked) {
                console.log("Добавлено в улюбленні");
                check.checked = false;
            }
            movieDB.movies.push(input.value);
            generateList();
            input.value = "";
        }
    });
}
