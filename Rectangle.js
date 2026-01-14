// Write a JavaScript program to create a class called 'Rectangle' 
// with properties for width and height. Include two methods to 
// calculate rectangle area and perimeter. Create an instance of 
// the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(length, height) {
    this.length = length;
    this.height = height;
  }

  getArea() {
    let area = this.length * this.height;

    return area;
  }

  getPerimeter() {
    let perimeter = 2 * (this.length + this.height);

    return perimeter
  }

  display() {
    console.log(`Area : ${this.getArea()} `);
    console.log(`Perimeter : ${this.getPerimeter()} `);

  }
}


let l = Number(prompt("Enter the lenght of the Rectangle"));

let h = Number(prompt("Enter the height of the Rectangle"));

let rec = new Rectangle(l, h);

rec.display();
