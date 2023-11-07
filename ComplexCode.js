/*
   Filename: ComplexCode.js
   Description: This code demonstrates a sophisticated and complex implementation of a website's shopping cart functionality.
*/

// Create a class for the shopping cart
class ShoppingCart {
   constructor() {
      this.items = [];
   }

   // Method to add an item to the cart
   addItem(item) {
      if (item instanceof Item) {
         this.items.push(item);
         console.log("Item added to cart.");
      } else {
         console.log("Invalid item.");
      }
   }

   // Method to remove an item from the cart
   removeItem(item) {
      if (this.items.includes(item)) {
         const index = this.items.indexOf(item);
         this.items.splice(index, 1);
         console.log("Item removed from cart.");
      } else {
         console.log("Item not found in cart.");
      }
   }

   // Method to calculate the total price of the items in the cart
   calculateTotal() {
      let total = 0;
      this.items.forEach((item) => {
         total += item.price;
      });
      return total;
   }
}

// Create a class for the items in the cart
class Item {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }

   // Method to display item details
   displayDetails() {
      console.log(`Item: ${this.name} - Price: $${this.price}`);
   }
}

// Create some items
const item1 = new Item("Shirt", 25);
const item2 = new Item("Pants", 40);
const item3 = new Item("Shoes", 60);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

// Display the cart items and total price
console.log("Cart Items:");
cart.items.forEach((item) => {
   item.displayDetails();
});
console.log(`Total Price: $${cart.calculateTotal()}`);