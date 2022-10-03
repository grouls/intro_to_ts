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