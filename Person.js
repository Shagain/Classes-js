
// Personal class
class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  // display methods for person information
  display() {
    console.log(`\t\t ${this.name} Information
  ----------------------------------
    Name: ${this.name} ,
    Age: ${this.age} ,
    Residency: ${this.country}
    `);
  }
}

// three instances of Person
let Person1 = new Person("Jame", 34, "Australia");
let Person2 = new Person("Ashwan", 29, "Nepal");
let Person3 = new Person("Shankar", 25, "Nepal");

// diplaying the person information
Person1.display();
Person2.display();
Person3.display();