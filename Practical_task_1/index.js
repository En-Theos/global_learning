"use strict";
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        var _a, _b, _c;
        let numberOfFilms = (_a = prompt("Скільки фільмів ви уже подивились?")) === null || _a === void 0 ? void 0 : _a.trim();
        while (true) {
            if (typeof numberOfFilms === 'string') {
                if (numberOfFilms.match(/\d/g)) {
                    this.count = numberOfFilms;
                    break;
                }
                else {
                    numberOfFilms = (_b = prompt("Значення повино бути числовим")) === null || _b === void 0 ? void 0 : _b.trim();
                }
            }
            else {
                numberOfFilms = (_c = prompt("Введіть значення")) === null || _c === void 0 ? void 0 : _c.trim();
            }
        }
    },
    rememberMyFilms() {
        var _a, _b, _c, _d, _e;
        for (let i = 0; i < 2; i++) {
            let name = (_a = prompt("Один із останіх переглянутих фільмів?")) === null || _a === void 0 ? void 0 : _a.trim();
            while (true) {
                if (typeof name === 'string' && name !== '' && name.length <= 50) {
                    this.movies[name] = 0;
                    break;
                }
                else {
                    name = (_b = prompt("Введіть назву не довшу 50 символів")) === null || _b === void 0 ? void 0 : _b.trim();
                }
            }
            let rate = (_c = prompt("На скільки ви його оцінете?")) === null || _c === void 0 ? void 0 : _c.trim();
            while (true) {
                if (typeof rate === 'string') {
                    if (rate.match(/\d/g)) {
                        this.movies[name] = rate;
                        break;
                    }
                    else {
                        rate = (_d = prompt("Значення повино бути числовим")) === null || _d === void 0 ? void 0 : _d.trim();
                    }
                }
                else {
                    rate = (_e = prompt("Введіть оцінку")) === null || _e === void 0 ? void 0 : _e.trim();
                }
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert("Переглянуто досить мало фільмів");
        }
        else if (personalMovieDB.count <= 30) {
            alert("Ви класичний глядач");
        }
        else if (personalMovieDB.count > 30) {
            alert("Ви кіноман");
        }
    },
    showMyDB() {
        if (!this.privat) {
            console.log(this);
        }
        else {
            console.log("Користувач приватний");
        }
    },
    writeYourGenres() {
        var _a, _b;
        for (let i = 0; i < 3; i++) {
            let genre = (_a = prompt("Ваш улюблений жанр?")) === null || _a === void 0 ? void 0 : _a.trim();
            while (true) {
                if (typeof genre === 'string' && genre !== '') {
                    this.genres.push(genre);
                    break;
                }
                else {
                    genre = (_b = prompt("Введіть коректне значення")) === null || _b === void 0 ? void 0 : _b.trim();
                }
            }
        }
    },
    toggleVisibleMyDB() {
        if (this.privat) {
            this.privat = false;
        }
        else {
            this.privat = true;
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
