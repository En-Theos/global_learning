function isPangram(str: string): boolean {
    return "aeioubcdfghjklmnpqrstvwxyz".split("").every(item => str.includes(item));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));