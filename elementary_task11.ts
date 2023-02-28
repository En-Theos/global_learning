const family: string[] = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr : string[]): string {
    return arr.length > 0 ? `Сім'я складається із: ${arr.join(' ')}` : "Сім'я пуста";
}

console.log(showFamily(family));

const favoriteCities: string[] = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr: string[]): void {
    for (const str of arr) {
        console.log(str.toLowerCase());
    }
}

standardizeStrings(favoriteCities);