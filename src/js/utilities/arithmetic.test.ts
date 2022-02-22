import {
  add, subtract, multiply, divide,
} from './arithmetic';

describe('arithmetic', () => {
  it('adds 2 + 2 correctly', () => {
    expect(add(2, 2)).toEqual(4);
  });

  it('subtracts 2 - 2 correctly', () => {
    expect(subtract(2, 2)).toEqual(0);
  });

  it('multiplies 2 * 2 correctly', () => {
    expect(multiply(2, 2)).toEqual(4);
  });

  it('divides 2 / 2 correctly', () => {
    expect(divide(2, 2)).toEqual(1);
  });
});
