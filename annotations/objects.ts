// Stephen Grider Typescript: The Complete Develops Guide
// Section 4: Annotations With Functions and Objects

const profile = {
  name: 'alex',
  age: 20,
  coords: { lat: 0, lng: 15},
  setAge(age: number): void {
    this.age = age;
  }
};

// destructuring
const { age }: { age: number } = profile;

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;