'use strict';

// yourScript.js
import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

tns({
    container: '.my-slider',
    items: 3,
    // slideBy: 'page',
    autoplay: true,
    // mode: "carousel",
    // speed: 300,
});
//==============================================

/*

const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];

const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr);
console.log(result);


const msg = 'My number +12345678, name: Oleg';

function transformMsg(str) {

    let a = str.replace(/\+\d{8}/, "*****");
    let b = a.replace(/\w{4}:\s\w{1,}/, "hidden");

    return b;
}

console.log(transformMsg(msg));
// Результатом вызова этой функции сейчас будет:
//My number *****, hidden



let y = 1;
let x = y = 2;
console.log(x);



let c = 4;
function addX(x) {
    return function (n) {
        console.log(x);
        console.log(n);
        return n + x;
    }
}

console.log(addX(3)(4));

const addThree = addX(3);

let d = addThree(c);
let res = addThree(c);

console.log(res)



const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function one() {
    const promises = [a(), b(), c()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}

async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}

async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}

one().then(console.log);
two().then(console.log);
three().then(console.log);



'use strict';

function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }

    console.log(sum());
}

getSum(4, 5);



const price = 500;
const money = 400;

switch (true) {
    case price > money:
        console.log('Мне не хватает денег');
    case price < money:
        console.log('Мне хватает денег!');
}



let a = [1, 2, 3], b = [1, 2, 3];

console.log(a == b);



if (0) {
    console.log('first')
} else if (NaN) {
    console.log('second');
} else if (' ') {
    console.log('third');
} else if (null) {
    console.log('fourth');
}



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
    setTimeout(() => {
        reject('bar');
    }, 900);
});

promise.then((value) => {
    console.log(value);
}).catch((e) => console.log(e));



function foo(a, b) {
    const [first, second] = a;
    const { eng, ru } = b;

    return `${second}, ${ru}`;
}

const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' });
console.log(result);



function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional)
}
setOptions(400, 500, 'red', 'top');



async function makeRequest() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(json => console.log(json));
}

makeRequest();



combineUrls('https', 'mysite.com');

const combineUrls = (protocol, domain) => {
    return `${protocol}://${domain}`;
};




console.log(0 || 1);
console.log(0 && 1);
console.log(0 || NaN || false || null);



const msg = 'Заявка №231';

const div = document.createElement('div');
div.style.background = 'red';
div.setAttribute('data-msg', true);
div.textContent = msg;

document.body.append(div);

*/