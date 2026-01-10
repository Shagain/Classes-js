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