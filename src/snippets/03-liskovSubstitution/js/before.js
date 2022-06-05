class Vehicle {
  constructor(wheels) {
    this.wheels = wheels;
  }

  engineNoise() {
    console.log("VROOM VROOM");
  }
}

class Car extends Vehicle {
  numWheels() {
    console.log(this.wheels);
  }
}

class Bicycle extends Vehicle {
  numWheels() {
    console.log(this.wheels);
  }

  // Bicycle has no engine, therefore we must throw an error
  // if someone attempts to access this property on a bicycle.
  engineNoise() {
    throw new Error("I have no engine.");
  }
}

const car = new Car(4);
const bicycle = new Bicycle(2);

car.engineNoise(); // "VROOM VROOM!"
bicycle.engineNoise(); // ERROR: I have no engine.
