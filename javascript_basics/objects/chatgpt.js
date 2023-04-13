#!/usr/bin/node

class Rectangle {
  constructor (width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea () {
    return this.width * this.height;
  }
  calculatePerimeter () {
    return (2 * this.width) + (2 * this.height);
  }
  printInfo () {
    console.log(`Width: ${this.width}`);
    console.log(`Height: ${this.height}`);
    console.log(`Area: ${this.calculateArea()}`);
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
  }
}

const rectangle1 = new Rectangle(5, 10);
rectangle1.printInfo();
