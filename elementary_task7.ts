function calculateVolumeAndArea(edge: number): string {
    return Number.isInteger(edge) && edge >= 0 ? `Объем куба: ${edge*edge*edge}, площадь всей поверхности: ${6*edge*edge}` : 'При вычислении    произошла ошибка';
}

function getCoupeNumber(num: number): string {
    const dataCoupe: string[] = ['1 2 3 4', '5 6 7 8', '9 10 11 12', '13 14 15 16', '17 18 19 20', '21 22 23 24', '25 26 27 28', '29 30 31 32', '33 34 35 36'];

    for (let i: number = 0; i < dataCoupe.length; i++) {
        if (dataCoupe[i].includes(`${num}`)) {
            return "Ваш номер купе " + (i + 1);
        }
    }

    return "Таких місць немає";
}