// Write a JavaScript program that creates a class called 
// 'Vehicle' with properties for make, model, and year. 
// Include a method to display vehicle details. Create a 
// subclass called 'Car' that inherits from the 'Vehicle' 
// class and includes an additional property for the number 
// of doors.Override the display method to include 
// the number of doors.

class Vechile {

  constructor(name, year, model) {
    this.name = name;
    this.year = year;
    this.model = model;
  }

  display() {
    console.log(`Car 
      name = ${this.name}
      year = ${this.year}
      model = ${this.model}`)
  }

}

class Car extends Vechile {
  constructor(name, year, model, numberOfDoors) {
    super(name, year, model);
    this.model = model;
    this.numberOfDoors = numberOfDoors;
  }

  display() {
    super.display();
    console.log(`Number of Doors : ${this.numberOfDoors}`)
  }
}

let Car1 = new Car("Toyoya", 2010, "SUV", 4);
let Car2 = new Car("Urus", 2019, "SUV", 4);


Car1.display();
Car2.display();
