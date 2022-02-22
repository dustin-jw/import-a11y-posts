import initializeButtonListener from './initializeButtonListener';

const updateCount = jest.fn();

describe('initializeButtonListener', () => {
  beforeEach(() => {
    document.body.innerHTML = '<p>Nothing to see here.</p>';
    updateCount.mockClear();
  });

  it('listens for click events', () => {
    document.body.innerHTML = '<button type="button" data-increment>Click Me!</button>';

    initializeButtonListener(updateCount);

    const button = document.querySelector('button');
    button?.click();

    expect(updateCount).toHaveBeenCalledTimes(1);
    expect(updateCount).toHaveBeenCalledWith(1);
  });

  it('does nothing if the button does not exist when initialized', () => {
    initializeButtonListener(updateCount);

    document.body.innerHTML = '<button type="button" data-increment>Click Me!</button>';
    const button = document.querySelector('button');
    button?.click();

    expect(updateCount).not.toHaveBeenCalled();
  });
});
