class Plane {
  turnOnEngine() {
    //
  }

  turnOnGeolocation() {
    //
  }

  fly() {
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

new CarDriver(new Plane());
