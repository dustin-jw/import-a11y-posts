import getErrorMessage from './getErrorMessage';

describe('getErrorMessage', () => {
  it('returns error.message when an Error is thrown', () => {
    try {
      throw new Error('Test error message');
    } catch (error) {
      expect(getErrorMessage(error)).toEqual('Test error message');
    }
  });

  it('returns the error string when more specific types of errors are thrown', () => {
    try {
      throw new TypeError('The type was wrong!');
    } catch (error) {
      expect(getErrorMessage(error)).toEqual('The type was wrong!');
    }
  });

  it('returns the string if a string is thrown', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw 'Did you know you can throw strings in JS?';
    } catch (error) {
      expect(getErrorMessage(error)).toEqual('Did you know you can throw strings in JS?');
    }
  });

  it('returns the boolean as a string if a boolean is thrown', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw false;
    } catch (error) {
      expect(getErrorMessage(error)).toEqual('false');
    }
  });

  it('returns the number as a string if a number is thrown', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw 7;
    } catch (error) {
      expect(getErrorMessage(error)).toEqual('7');
    }
  });

  it('returns "undefined" if undefined is thrown', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw undefined;
    } catch (error) {
      expect(getErrorMessage(error)).toEqual('undefined');
    }
  });
});
