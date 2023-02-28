interface IMovieDB {
    movies: string[]
}

const movieDB: IMovieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против "
    ]
};

document.querySelectorAll(".promo__adv img").forEach(item => item.remove());

let genre:Element | null =  document.querySelector(".promo__content .promo__bg .promo__genre");
if (genre instanceof HTMLDivElement) {
    genre.textContent = "ДРАМА";
}

let poster:Element | null = document.querySelector(".promo__content .promo__bg");
if (poster instanceof HTMLDivElement) {
    poster.style.background = "url('./img/bg.jpg') center center/cover no-repeat";
}

let parentFilms:Element | null = document.querySelector(".promo__interactive .promo__interactive-list");
function generateList(): void {
    if (parentFilms instanceof Element) {
        parentFilms.innerHTML = '';
    
        movieDB.movies.forEach((item, i) => {
            parentFilms!.innerHTML += `
                <li class="promo__interactive-item">${i+1}: ${item.length > 21 ? item.slice(0, 21) + '...' : item}
                    <div class="delete"></div>
                </li>
            `
        });
        parentFilms.querySelectorAll(".promo__interactive-item .delete").forEach((item, i) => {
            item.addEventListener("click", () => {
                item.parentElement?.remove(); 
                movieDB.movies.splice(i, 1);
                generateList();
            });
        });
    }
}generateList();

let formAddFilm: Element | null = document.querySelector("form.add ");

if (formAddFilm instanceof Element) {
    formAddFilm.querySelector("button")?.addEventListener('click', (e) => {
        e.preventDefault();
        let input: HTMLInputElement | null = formAddFilm!.querySelector(".adding__input");
        
        if (input instanceof HTMLInputElement && input.value.trim() !== "") {
            let check: HTMLInputElement | null = formAddFilm!.querySelector<HTMLInputElement>("[type='checkbox']" );

            if (check?.checked) {
                console.log("Добавлено в улюбленні");
                check.checked = false;
            }

            movieDB.movies.push(input.value);
            generateList();
            input.value = "";
        }
    });
}