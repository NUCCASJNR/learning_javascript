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
    
    print () {
        // const row = 'X'.repeat(this.width);
        // for (let i = 0; i < this.height; i++) {
        //     console.log(row)
        // }  
        for (let h = 0; h < this.height; h++) {
            console.log('X'.repeat(this.width));
        }
    }

    rotate () {
        [this.width, this.height] = [this.height, this.width];
    }

    double () {
        [this.width, this.height] = [this.width * 2, this.height * 2];
    }

}
module.exports = Rectangle;