import * as _ from 'lodash';

console.log('hello world');

async function hello() {
    return 'typescript';
}

const url = new URL('...')

_.pickBy('...')

let number:any = 23;

number = '23'

let anyvar;
anyvar = 1122;

// create a custom type
type Style = string;

// let customVar: Style = 23;
let customVar: Style = '23';

type Style2 = 'bold' | 'italic' | 23;

// let customVar: Style = 23;
let customVar2: Style2 = 'bold';

// Strong Typing Objects
// const person = {
//     firstName: "Jake",
//     lastName: "Jonah"
// }

// const person2 = {
//     firstName: "Steve",
//     lastName: "Rogers",
//     strong: true,
// }

// Interface to force an Object to a particular Shape with Strong types
interface Warrior {
    firstName: string,
    lastName: string,
    speed: number,
    [key: string]: any
}
const person: Warrior = {
    firstName: "Jake",
    lastName: "Jonah",
    speed: 0,
    armor: true
}

const person2: Warrior = {
    firstName: "Jake",
    lastName: "Jermy",
    speed: 10,
    health: 'full'
}

//Strong typing in numbers
function pow(x:number, y:number):string {
    return Math.pow(x,y).toString()
}

pow(23,10)

// Arrays Strong type

let arr: number[] = [];
arr.push(22);
// arr.push('i am batman!')
// arr.push(false);
arr.push(224);

let arr2: Warrior[] = [];
// arr2.push(12);
// arr2.push('abcd');
arr2.push({
    firstName: 'batman',
    lastName: 'Wayne',
    speed: 2000,
    powers: null,
})

// Tuple
type MyList = [number?, string?, boolean?]
const arr3: MyList = [];

// Generics
class Observable<T>{
    constructor(public value: T) {
        console.log(value)
    }
}
let x: Observable<number>;
let y: Observable<Warrior>;
let z = new Observable(23);