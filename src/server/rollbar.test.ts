import rollbar from './rollbar';

describe('rollbar', () => {
  it('has the correct configuration', () => {
    expect(rollbar).toHaveProperty('options.accessToken', 'mustBe32CharacterLongAccessToken');
    expect(rollbar).toHaveProperty('options.environment', 'test');
    expect(rollbar).toHaveProperty('options.captureUncaught', true);
    expect(rollbar).toHaveProperty('options.captureUnhandledRejections', true);
  });
});
