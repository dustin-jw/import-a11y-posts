import updateCount from './updateCount';

describe('updateCount', () => {
  it('updates the count', () => {
    document.body.innerHTML = '<p>Click Count: <span data-counter>0</span></p>';

    const counter = document.querySelector('[data-counter]');
    expect(counter?.innerHTML).toEqual('0');

    updateCount(1);
    expect(counter?.innerHTML).toEqual('1');
  });

  it('does nothing if it cannot find the element', () => {
    document.body.innerHTML = '<p>Click Count: <span>0</span></p>';

    const counter = document.querySelector('span');
    expect(counter?.innerHTML).toEqual('0');

    updateCount(1);
    expect(counter?.innerHTML).toEqual('0');
  });
});
