// Step 1: Create index.js
// Step 2: Define the Car constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
// Step 3: Add getDescription method to the Car prototype
Car.prototype.getDescription = function() {
  return `Car: ${this.make} ${this.model} ${this.year}`;
};
// Step 4: Define the ElectricCar subclass
function ElectricCar(make, model, year, range) {
  // Call the Car constructor using "super"
  Car.call(this, make, model, year);
  this.range = range;
}
// Step 5: Set up prototype chain and override getDescription
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;
ElectricCar.prototype.getDescription = function() {
  return `Electric Car: ${this.make} ${this.model} ${this.year} (Range: ${this.range} miles)`;
};
// Step 6: Create an instance of ElectricCar and call getDescription
const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(myElectricCar.getDescription());
