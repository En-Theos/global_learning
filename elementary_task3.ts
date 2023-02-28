for (let i: number = 5; i <= 10; i++) {
    console.log(i);
}

for (let i:number = 20; i >=10; i--) {
    if (i === 13) {
        break;
    }   
    console.log(i); 
}

for (let i:number = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }    
}

let j = 1;
while (j <= 16) {
    j++;
    if (j % 2 === 0) {
        continue;
    } else {
        console.log(j);
    }
}

let arr: number[] = [];

for (let i: number = 0; i <= 4; i++) {
    arr[i] = i + 6;    
}