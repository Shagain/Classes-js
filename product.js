// Write a JavaScript program that creates a class called Product
//  with properties for product ID, name, and price. Include a method
//   to calculate the total price by multiplying the price by the quantity
//   . Create a subclass called PersonalCareProduct that inherits from 
//   the Product class and adds an additional property for the discount 
//   %. Override the total price calculation method to include the 
//   discount%. Create an instance of the PersonalCareProduct class and
//    calculate its total price.


const quantity = 100;

class Product {
  constructor(productID, name, price) {
    this.productID = productID;
    this.name = name;
    this.price = price;
  }

  totalPrice(quantity) {
    const Fprice = this.price * quantity;
    return Fprice;
  }

  display() {
    console.log(`-----Price Before Discount ------
    Product ID: ${this.productID},
    Name: ${this.name},
    Price : $${this.price}
    quantity: ${quantity}
    Total price : $${this.price * quantity}
    `);
    // Total price : $${this.totalPrice(quantity)}
  }
}


class PersonalCareProduct extends Product {

  constructor(productID, name, price, discount) {
    super(productID, name, price);
    this.discount = discount;
  }

  totalPrice(quantity) {
    const total = super.totalPrice(quantity);
    const discountAmount = (total * this.discount) / 100;
    const afterDiscountPrice = total - discountAmount;
    console.log(`---after  ${total}----`);
    return afterDiscountPrice;
  }

  totalSave() {
    const total = super.totalPrice(quantity);
    const discountAmount = (total * this.discount) / 100;

    return discountAmount;
  }

  display() {
    super.display();
    console.log(`-----Price After Discount ------

    Discount Rate: ${this.discount}%
    price after Discount $${this.totalPrice(quantity)}
    -----------------------------------------
          Total save : $${this.totalSave()}
    -----------------------------------------` );
  }
}


let PersonalCareProduct1 = new PersonalCareProduct("S-001", "Shampoo", 12, 12.5);

PersonalCareProduct1.display();