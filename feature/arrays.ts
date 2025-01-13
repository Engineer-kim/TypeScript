//배열: 길이가 가변적입니다. 요소를 추가하거나 제거할 수 있음
const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(100);


carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

console.log(upperCaseCarMakers); // ['ford', 'toyota', 'chevy']

const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
