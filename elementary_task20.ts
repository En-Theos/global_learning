type listFilm = {name: string, rating: number}[];

const films: listFilm = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr: listFilm): listFilm {
    return arr.filter(item => item.rating >= 8);
}

function showListOfFilms(arr: listFilm): string {
    let result: string[] = [];

    arr.forEach((item) => {
        result.push(item.name);
    });

    return result.join(", ");
}

function setFilmsIds(arr: listFilm): {name: string, rating: number, id: number}[] {
    return arr.map((item, index) => {
        return {...item, id: index}
    });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr: listFilm): boolean {
    return arr.every(item => "id" in item);
}

console.log(checkFilms(tranformedArray));