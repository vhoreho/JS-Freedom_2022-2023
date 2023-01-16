class Plane {
  constructor(bort, flyNum, engines, fuel, totalFuel, speed, altitude, baggage, totalBaggage) {
    this.bort = bort;
    this.flyNum = flyNum;
    this.engines = engines;
    this.fuel = fuel;
    this.speed = speed;
    this.totalFuel = totalFuel;
    this.altitude = altitude;
    this.something = something;
    this.totalBaggage = totalBaggage;
  }

  getConsumption() {
    return this.fuel * this.engines.length * (this.totalBaggage / this.baggage).toFixed(2);
  }

  getSpeedy(plane) {
    return this.speed > plane.speed ? this : plane;
  }

  getFaultEngine() {
    let totalEnginesVolume = this.engines.reduce((a, b) => a + b, 0);
    if (totalEnginesVolume < 50) {
      this.speed = this.speed / totalEnginesVolume;
      this.altitude = this.altitude / totalEnginesVolume;
    }
    return `Speed: ${this.speed}, Altitude: ${this.altitude}`;
  }

  static getMostFastestPlane(plane1, plane2, plane3) {
    return plane1.speed > plane2.speed && plane1.speed > plane3.speed
      ? plane1
      : plane2.speed > plane3.speed && plane2.speed > plane1.speed
      ? plane2
      : plane3;
  }
}

const Boeing = new Plane('B034S', '403', [10, 10, 10, 10], 3, 300, 20, 3000, 30, 100);
const Corn = new Plane('B034G', '464', [10, 40, 20, 10], 6, 700, 10, 2000, 40, 100);
const Helicopter = new Plane('B034R', '461', [10, 40, 20, 10], 6, 700, 10, 2000, 40, 100);

console.log(Plane.getMostFastestPlane(Boeing, Corn, Helicopter));
// console.log(plane1.getSpeedy(plane2));
