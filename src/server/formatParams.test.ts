import formatParams from './formatParams';

describe('formatParams', () => {
  it('converts string params to numbers', () => {
    expect(formatParams({ operation: 'add', a: '2', b: '2' })).toEqual({ operation: 'add', a: 2, b: 2 });
  });

  it('throws errors for invalid inputs', () => {
    expect(() => {
      formatParams({ operation: 'add', a: 'foo', b: '2' });
    }).toThrow('a must be a number');

    expect(() => {
      formatParams({ operation: 'subtract', a: '2', b: 'foo' });
    }).toThrow('b must be a number');

    expect(() => {
      formatParams({ operation: 'multiply', a: 'foo', b: 'bar' });
    }).toThrow('a must be a number');

    expect(() => {
      formatParams({ operation: 'divide', a: 'foo', b: 'bar' });
    }).toThrow('a must be a number');

    expect(() => {
      formatParams({ operation: 'nthPower', a: '2', b: '2' });
    }).toThrow('operation must be one of "add", "subtract", "multiply", or "divide"');
  });
});
