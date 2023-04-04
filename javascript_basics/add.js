function add (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Error: either inputs must be numbers');
  } else {
    console.log('The addition of ' + a + ' and ' + b + ' is ' + (a + b));
  }
}

add(3, 5);
add('hi', 'hi');
add('hi', 90);
