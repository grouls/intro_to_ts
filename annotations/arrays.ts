// if we initialise our arrays with values, type inference will happen
// if the array is empty, we should use annotations
const carMakers: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = []; // e.g. [['f150'], ['corolla'], ['camaro']];

// help with intference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(1);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '09-04-2022'];

importantDates.push('01-01-2023');
importantDates.push(new Date());
importantDates.push(1);
