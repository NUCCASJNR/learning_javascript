#!/usr/bin/node

function Student(name, age, class_, school, address, city, country, hobbies) {
    this.name = 'Al-Areef';
    this.age = 16;
    this.class = 'Tech3';
    this.school = 'Al-Areef School';
    this.address = 'Al-Areef Street';
    this.city = 'Al-Areef City';
    this.country = 'Al-Areef Country';
    this.hobbies = 'Writing JavaScript Code and python code';
}

const Student = new Student('Sideeq');
console.log(Student);