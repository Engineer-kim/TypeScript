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

