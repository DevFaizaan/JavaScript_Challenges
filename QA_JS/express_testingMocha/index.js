function inverse_factorial(factorial) {
  let current = 1;
  while (factorial > current) {
    if (factorial % current) {
      return -1; //not divisible
    }
    factorial /= current;
    ++current;
  }
  if (current == factorial) {
    return current;
  }
  return -1;
}

function doggo(placement) {
  var str = [];

  for (i = 1; i <= 100; i++) {
    let num = String.valueOf(i);
    let dog = String.valueOf(placement);

    if (i == 11 || i == 12 || i == 13) {
      str.push(num + 'th');
    } else {
      if (Math.abs(i) % 10 == 1) {
        str.push(num + 'st');
      } else if (Math.abs(i) % 10 == 2) {
        str.push(num + 'nd');
      } else if (Math.abs(i) % 10 == 3) {
        str.push(num + 'rd');
      } else {
        str.push(num + 'th');
      }
    }

    str.remove(dog + 'st');
    str.remove(dog + 'nd');
    str.remove(dog + 'rd');
    str.remove(dog + 'th');
  }
  System.out.print(str);
  return str;
}
