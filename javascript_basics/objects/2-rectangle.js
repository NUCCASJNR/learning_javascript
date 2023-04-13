#!/usr/bin/node

class Rectangle {
    constructor (w, h) {
        // if (w <= 0 || h <= 0) {
        // // do nothing
        // } else {
        //     this.width = w;
        //     this.height = h;
        // }
        if ( w > 0 && h > 0 ) {
            this.width = w;
            this.height = h;
        }
    }   
}
module.exports = Rectangle;