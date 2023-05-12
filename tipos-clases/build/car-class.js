"use strict";
class Car {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	drive() {
		console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
	}
}
const myCar = new Car("Volkswagen", "Gol", 2019);
myCar.drive();
