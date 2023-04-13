#!/usr/bin/node
const Rectangle = require('./4-rectangle');

const r1 = new Rectangle(2, 3);
r1.print();

const r2 = new Rectangle(10, 5);
r2.print();

console.log('Rotate:')
r2.rotate();
r2.print();

console.log('Double');
r1.double();
r1.print();