const fs = require('fs')

const data = fs.readFileSync('inputs/day1.txt', 'utf8');

const list = data.split('\n').map(function(item){
    return parseInt(item, 10)
});

let totalD = 0;
let totalS = 0;

for (var i = 0; i < list.length; i++) {
    if (list[i + 1] - list[i] > 0) totalD++;
    const a = list[i] + list[i + 1] + list[i + 2];
    const b = list[i + 1] + list[i + 2] + list[i + 3];
    if (b - a > 0) totalS++;
};

console.log("total D: ", totalD);
console.log("total S: ", totalS);

/*function answer(list, n){
    for (let i = 1; i < n - 1; i++){
        if (list[i] > list[i - 1] && list[i] > list[i + 1])
        console.log( list[i] + " ");
    }
}*/

/*for (i = 0; i < list.length; i++) {
    console.log(list[i])
}*/

//console.log(data)