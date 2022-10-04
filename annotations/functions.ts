// Stephen Grider Typescript: The Complete Develops Guide
// Section 4: Annotations With Functions and Objects

const add = (a: number, b: number): number => {
  return a + b;
};

// without the return annotation 
// we don't have to return anything at all
// this is why we should use return annotations
// inference not enough here
const substract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number{
  return a / b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

// function that does not return anyting (or null or undefined)
const logger = ( message: string): void => {
  console.log(message);
};

// we will never execute this function completely
// at some point, we will throw an error
// and exit the function early
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

// destructuring
const logWeather = ({ date, weather }: { date: Date, weather: string}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(forecast);