interface UpdateFunction {
  (count: number): void;
}

const initializeButtonListener = (callback: UpdateFunction) => {
  let count = 0;

  const button = document.querySelector('[data-increment]');
  button?.addEventListener('click', () => {
    count += 1;
    callback(count);
  });
};

export default initializeButtonListener;
