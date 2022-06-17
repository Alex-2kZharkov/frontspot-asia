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

    engineNoise() {
        throw new Error("I have no engine.");
    }
}

new Car(4).engineNoise(); // "VROOM VROOM!"
new Bicycle(2).engineNoise() // ERROR: I have no engine.
