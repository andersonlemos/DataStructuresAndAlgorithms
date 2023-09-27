function recursive(number) {
  if (number <= 1) return 1;
  return number * recursive(number - 1);
}

function iterative(number) {
  let _fatorial = 1;

  if (number <= 1) return 1;

  while (number != 0) {
    _fatorial *= number;
    number--;
  }
  return _fatorial;
}

module.exports = { recursive, iterative };
