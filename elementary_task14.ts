const students: string[] = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr: string[]): (string | string[])[] {
    arr = arr.sort();
    let arrResult:(string | string[])[] = [];

    for (let i = 0; i < 9; i+=3) {
        arrResult.push([arr[i], arr[i+1], arr[i+2]]);
    }

    arrResult.push(`Студенти що залишились: ${arr.length > 9 ? arr.slice(9, arr.length).join(', ') : '-'}`);

    return arrResult;
}

console.log(sortStudentsByGroups(students));