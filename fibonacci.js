export function fibonacci(number) {
  if (number === 1 || number === 2) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
  //   if (number === 3) return 2;
  //   else if (number === 4) return 3;
  //   return 1;
}
