const {
  sumar,
  restar,
  multiplicar,
  dividir,
  esPar,
} = require('../src/operaciones');

describe('Pruebas de operaciones matemáticas', () => {
  test('Debe sumar dos números correctamente', () => {
    expect(sumar(5, 3)).toBe(8);
  });

  test('Debe restar dos números correctamente', () => {
    expect(restar(10, 4)).toBe(6);
  });

  test('Debe multiplicar dos números correctamente', () => {
    expect(multiplicar(4, 5)).toBe(20);
  });

  test('Debe dividir dos números correctamente', () => {
    expect(dividir(20, 4)).toBe(5);
  });

  test('Debe identificar correctamente un número par', () => {
    expect(esPar(8)).toBe(true);
  });

  test('Debe lanzar error al dividir entre cero', () => {
    expect(() => dividir(10, 0)).toThrow(
      'No se puede dividir entre cero'
    );
  });
});