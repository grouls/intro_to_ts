const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
// adding the annotation makes this array a tuple
// const pepsi: [string, boolean, number] = ['brown', true, 40];
// or use a type alias which is more reusabled
const pepsi: Drink = ['brown', true, 40];
const sprint: Drink = ['clear', true, 30];
const water: Drink = ['clear', false, 0];

pepsi[0] = 40;
pepsi[2] = 'brown';

// objects make it clearer to know what we are working with at a glance

// tuple
const carSpecs: [number, number] = [400, 3354];

// object
const carStats = {
  horsepower: 400,
  weight: 3354,
};
