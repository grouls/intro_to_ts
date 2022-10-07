class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // override drive
  // private so can only be called from within
  // the car class
  private drive(): void {
    console.log('vroom');
  }
  // public by default
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log('🚀 ~ file: classes.ts ~ line 23 ~ vehicle', vehicle);

const car = new Car(4, 'green');
console.log('🚀 ~ file: classes.ts ~ line 31 ~ car', car);

car.startDrivingProcess();
