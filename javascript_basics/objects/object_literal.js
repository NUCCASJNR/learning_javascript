#!/usr/bin/node

const Student = {
    name: 'Al-Areef',
    age: 16,
    class: 'Tech3',
    school: 'Al-Areef School',
    address: 'Al-Areef Street',
    city: 'Al-Areef City',
    country: 'Al-Areef Country',
    hobbies: 'Writing JavaScript Code and python code',
}

const key = Object.keys(Student);
const val = Object.values(Student);
console.log(val)
console.log(Student);
console.log(key);

console.log(Student['name']); // Al-Areef
Student['name'] = 'Sideeq';
console.log(Student);