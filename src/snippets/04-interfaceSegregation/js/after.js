class Vehicle {
  turnOnEngine() {
    //
  }
  turnOnGeolocation() {
    //
  }
}
class Plane extends Vehicle {
  fly() {
    //
  }
}
class Car extends Vehicle {
  makeBipBip() {
    //
  }
}
class CarDriver {
  constructor(vehicle) {
    this.vehicle = vehicle;
    this.startVehicle();
  }
  startVehicle() {
    this.vehicle.turnOnEngine();
    this.vehicle.turnOnGeolocation();
  }
}

new CarDriver(new Car());
