import capitalize from './capitalize';

describe('capitalize', () => {
  it('capitalizes the first letter in a string', () => {
    expect(capitalize('it was the best of times')).toEqual('It was the best of times');
    expect(capitalize('john smith')).toEqual('John smith');
    expect(capitalize('sassafras')).toEqual('Sassafras');
  });

  it('leaves the string unchanged when the first letter is already capitalized', () => {
    expect(capitalize('It was the best of times')).toEqual('It was the best of times');
    expect(capitalize('John Smith')).toEqual('John Smith');
    expect(capitalize('Sassafras')).toEqual('Sassafras');
  });

  it('handles strings beginning with numbers correctly', () => {
    expect(capitalize('4 out of 5 dentists')).toEqual('4 out of 5 dentists');
    expect(capitalize('525,600 minutes')).toEqual('525,600 minutes');
    expect(capitalize('1 in a million')).toEqual('1 in a million');
  });

  it('handles special characters correctly', () => {
    expect('$1 million').toEqual('$1 million');
    expect('#hashtag').toEqual('#hashtag');
    expect('<%= weird syntax %>').toEqual('<%= weird syntax %>');
  });
});
