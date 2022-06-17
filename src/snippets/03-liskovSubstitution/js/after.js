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
  runPedals() {
    console.log("I am made from carbon fiber!");
  }
}

new Car(4).numWheels()
new Bicycle(2).numWheels()