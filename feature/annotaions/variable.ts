let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

class Car {}
let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//: (i: number) => void ㅇㅣ 부분이 받을 파라미터와 리턴 타입에 대한 명시 부분
const logNumber: (i: number) => void = (i: number) =>{
  console.log(i)
}

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number ; y: number} = JSON.parse(json); //JSON.parse 기본적으로 any 리턴함
console.log(coordinates); // any 를 쓰면 타입스크립트 쓰는의미가 없음 => 명시적으로 타입 선언해주는게 좋음


let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;  //불린 타입 혹은 숫자 타입 둘중에 하나를 가질수 있음

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

