class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  display() {
    console.log(`Person Information
      Name: ${name} ,
      Age: ${age} ,
      Residency: ${country}
      `);
  }

}

let Person1 = new Person("Jame", 34, "Australia");
let Person2 = new Person(Ashwan, 29, Nepal);
let Person3 = new Person(Shankar, 25, Nepal);

Person1.display();
Person2.display();
Person3.display();