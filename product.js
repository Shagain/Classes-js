// Write a JavaScript program that creates a class called Product
//  with properties for product ID, name, and price. Include a method
//   to calculate the total price by multiplying the price by the quantity
//   . Create a subclass called PersonalCareProduct that inherits from 
//   the Product class and adds an additional property for the discount 
//   %. Override the total price calculation method to include the 
//   discount%. Create an instance of the PersonalCareProduct class and
//    calculate its total price.

class Product {
  constructor(productID, name, price) {
    this.productID = productID;
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`Product ID: ${productID},
      Name: ${name},
      Price : $${price}`);
  }

  totalPrice(quantity) {
    let Fprice = this.price * quantity;
    return Fprice;
  }
}

class PersonalCareProduct extends Product {

}