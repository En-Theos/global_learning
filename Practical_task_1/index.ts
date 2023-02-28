type strngOrNull = string | undefined;

const personalMovieDB: {
    count: number,
    movies: Record<string, number>,
    actors: {},
    genres: string[],
    privat: boolean,
    start: () => void,
    rememberMyFilms: () => void,
    detectPersonalLevel: () => void,
    showMyDB: () => void,
    writeYourGenres: () => void,
    toggleVisibleMyDB: () => void;
} = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        let numberOfFilms: strngOrNull = prompt("Скільки фільмів ви уже подивились?")?.trim();
        
        while(true) {
            if (typeof numberOfFilms === 'string') {
                if (numberOfFilms.match(/\d/g)) {
                    this.count = numberOfFilms as unknown as number;
                    break;
                } else {
                    numberOfFilms = prompt("Значення повино бути числовим")?.trim();
                }
            } else {
                numberOfFilms = prompt("Введіть значення")?.trim();
            }
        }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let name: strngOrNull = prompt("Один із останіх переглянутих фільмів?")?.trim();
            while(true) {
                if (typeof name === 'string' && name !== '' && name.length <= 50) {
                    this.movies[name] = 0;
                    break;
                } else {
                    name = prompt("Введіть назву не довшу 50 символів")?.trim();
                }
            }
        
            let rate: strngOrNull = prompt("На скільки ви його оцінете?")?.trim();
            while(true) {
                if (typeof rate === 'string') {
                    if (rate.match(/\d/g)) {
                        this.movies[name] = rate as unknown as number;
                        break;
                    } else {
                        rate = prompt("Значення повино бути числовим")?.trim();
                    }
                  
                } else {
                    rate = prompt("Введіть оцінку")?.trim();
                }
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert("Переглянуто досить мало фільмів");
        } else if (personalMovieDB.count <= 30) {
            alert("Ви класичний глядач");
        } else if (personalMovieDB.count > 30) {
            alert("Ви кіноман");
        }
    },
    showMyDB() {
        if (!this.privat) {
            console.log(this);
        } else {
            console.log("Користувач приватний");
        }
    },
    writeYourGenres() {
        for (let i: number = 0; i < 3; i++) {
            let genre: string | undefined = prompt("Ваш улюблений жанр?")?.trim();

            while (true) {
                if (typeof genre === 'string' && genre !== '') {
                    this.genres.push(genre);
                    break;
                } else {
                    genre = prompt("Введіть коректне значення")?.trim();
                }
            }            
        }
    },
    toggleVisibleMyDB() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
}
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();