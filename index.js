import * as _ from 'lodash';
console.log('hello world');
async function hello() {
    return 'typescript';
}
const url = new URL('...');
_.pickBy('...');
let number = 23;
number = '23';
let anyvar;
anyvar = 1122;
// let customVar: Style = 23;
let customVar = '23';
// let customVar: Style = 23;
let customVar2 = 'bold';
const person = {
    firstName: "Jake",
    lastName: "Jonah",
    speed: 0,
    armor: true
};
const person2 = {
    firstName: "Jake",
    lastName: "Jermy",
    speed: 10,
    health: 'full'
};
//Strong typing in numbers
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(23, 10);
// Arrays Strong type
let arr = [];
arr.push(22);
// arr.push('i am batman!')
// arr.push(false);
arr.push(224);
let arr2 = [];
// arr2.push(12);
// arr2.push('abcd');
arr2.push({
    firstName: 'batman',
    lastName: 'Wayne',
    speed: 2000,
    powers: null,
});
const arr3 = [];
// Generics
class Observable {
    constructor(value) {
        this.value = value;
        console.log(value);
    }
}
let x;
let y;
let z = new Observable(23);
