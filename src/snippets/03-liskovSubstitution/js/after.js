class Vehicle {
  constructor(wheels) {
    this.wheels = wheels;
  }

  numWheels() {
    console.log(this.wheels);
  }
}

class Car extends Vehicle {
  engineNoise() {
    console.log("VROOM VROOM");
  }
}

class Bicycle extends Vehicle {
  sayFrameMaterial() {
    console.log("I am made from carbon fibre!");
  }
}

const car = new Car(4);
const bicycle = new Bicycle(2);

car.numWheels();
bicycle.numWheels();
