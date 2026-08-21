function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero');
  }

  return a / b;
}

function esPar(numero) {
  return numero % 2 === 0;
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  esPar,
};