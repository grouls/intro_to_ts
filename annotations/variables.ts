//Stephen Grider Typescript: The Complete Develops Guide
//Section 3: Type Annotations in Action

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

apples = "hello world";
speed = 200;
hasName= {};
nothing= true;

//build in objects
let now: Date = new Date();

now = true;

//Array
let colours: string[] = ['red', 'green', 'blue'];

colours = 'black';
colours.push(1);

let myNumbers: number[] = [1, 2, 3];

myNumbers.push('one');

//Classes
class Car {

}
//car is an instance of Car
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  a: '50',
  x: 10,
  y: 20,
}

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//When to use annotations
// 1) Function that returns the 'any' type 
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a variable on one line and intialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
  if(words[i] === 'green'){
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}
