// Write a JavaScript program that creates a class called 'Shape' 
// with a method to calculate the area. Create two subclasses,
//  'Circle' and 'Triangle', that inherit from the 'Shape' class
//   and override the area calculation method. Create an instance
//    of the 'Circle' class and calculate its area. Similarly, 
//    do the same for the 'Triangle' class.

class Shape {
  constructor(ShapeName) {
    this.ShapeName = ShapeName;
  }

  display() {
    console.log(`----for the ${this.ShapeName}`)
  }

  CalcArea() {
    console.log(`Area of the ${this.ShapeName} is`)
  }

}

class Circle extends Shape {
  constructor(ShapeName, Radius) {
    super(ShapeName);
    this.Radius = Radius;
  }

  CalcArea() {
    let area = this.Radius * this.Radius * Math.PI;
    super.CalcArea();
    console.log(`${area.toFixed(2)}`);
    return area;
  }

}

class Triangle extends Shape {
  constructor(ShapeName, length, height) {
    super(ShapeName);
    this.length = length;
    this.height = height;
  }

  CalcArea() {
    let area = this.length * this.height;
    super.CalcArea();
    console.log(`${area}`);
    return area;
  }
}

let Circle1 = new Circle("Circle", 2);
let Circle2 = new Circle("Circle", 3);

let Triangle1 = new Triangle("Triangle", 2, 3);
let Triangle2 = new Triangle("Triangle", 3, 4);


Circle1.CalcArea();
Circle2.CalcArea();

Triangle1.CalcArea();
Triangle2.CalcArea();

