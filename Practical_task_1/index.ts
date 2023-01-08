type strngOrNull = string | null;

const personalMovieDB: {
    count: number,
    movies: Record<string, number>,
    actors: {},
    genres: string[],
    privat: boolean
} = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let numberOfFilms: strngOrNull = prompt("Скільки фільмів ви уже подивились?");

while(true) {
    if (typeof numberOfFilms === 'string') {
        if (numberOfFilms.match(/\d/g)) {
            personalMovieDB.count = numberOfFilms as unknown as number;
            break;
        } else {
            numberOfFilms = prompt("Значення повино бути числовим");
        }
    } else {
        numberOfFilms = prompt("Введіть значення");
    }
}

for (let i = 0; i < 2; i++) {
    let name: strngOrNull = prompt("Один із останіх переглянутих фільмів?");
    while(true) {
        if (typeof name === 'string' && name !== '') {
            personalMovieDB.movies[name] = 0;
            break;
        } else {
            name = prompt("Введіть назву");
        }
    }

    let rate: strngOrNull = prompt("На скільки ви його оцінете?");
    while(true) {
        if (typeof rate === 'string') {
            if (rate.match(/\d/g)) {
                personalMovieDB.movies[name] = rate as unknown as number;
                break;
            } else {
                rate = prompt("Значення повино бути числовим");
            }
          
        } else {
            rate = prompt("Введіть оцінку");
        }
    }
}

