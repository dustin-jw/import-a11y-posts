const updateCount = (newCount: number): void => {
  const counterElement = document.querySelector('[data-counter]');

  if (counterElement) {
    counterElement.innerHTML = String(newCount);
  }
};

export default updateCount;
