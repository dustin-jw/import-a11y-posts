import { math, mathPageContent } from '.';

const additionContent = `
  <h1>Add</h1>

  <p>
    2 + 2 = 4
  </p>
`;

const subtractionContent = `
  <h1>Subtract</h1>

  <p>
    2 - 2 = 0
  </p>
`;

const multiplicationContent = `
  <h1>Multiply</h1>

  <p>
    2 &times; 2 = 4
  </p>
`;

const divisionContent = `
  <h1>Divide</h1>

  <p>
    2 &divide; 2 = 1
  </p>
`;

describe('math page', () => {
  describe('mathPageContent', () => {
    it('renders the "add" page content correctly', () => {
      expect(mathPageContent('Add', '2 + 2 = 4')).toEqual(additionContent);
    });

    it('renders the "subtract" page content correctly', () => {
      expect(mathPageContent('Subtract', '2 - 2 = 0')).toEqual(subtractionContent);
    });

    it('renders the "multiply" page content correctly', () => {
      expect(mathPageContent('Multiply', '2 &times; 2 = 4')).toEqual(multiplicationContent);
    });

    it('renders the "divide" page content correctly', () => {
      expect(mathPageContent('Divide', '2 &divide; 2 = 1')).toEqual(divisionContent);
    });
  });

  describe('math', () => {
    it('renders the "add" page correctly', () => {
      document.documentElement.innerHTML = math('add', '2 + 2 = 4');
      const main = document.querySelector('main');
      const title = document.querySelector('title');
      const description = document.querySelector('meta[name="description"]');

      expect(main?.innerHTML.includes(additionContent)).toEqual(true);
      expect(title?.innerHTML).toEqual('Add | Cohort Project Starter');
      expect(description?.getAttribute('content')).toEqual('This is the math page. View the results of sums, subtractions, multiplications, and divisions here.');
    });

    it('renders the "subtract" page correctly', () => {
      document.documentElement.innerHTML = math('subtract', '2 - 2 = 0');
      const main = document.querySelector('main');
      const title = document.querySelector('title');
      const description = document.querySelector('meta[name="description"]');

      expect(main?.innerHTML.includes(subtractionContent)).toEqual(true);
      expect(title?.innerHTML).toEqual('Subtract | Cohort Project Starter');
      expect(description?.getAttribute('content')).toEqual('This is the math page. View the results of sums, subtractions, multiplications, and divisions here.');
    });

    it('renders the "multiply" page correctly', () => {
      document.documentElement.innerHTML = math('multiply', '2 &times; 2 = 4');
      const main = document.querySelector('main');
      const title = document.querySelector('title');
      const description = document.querySelector('meta[name="description"]');

      expect(main?.innerHTML.includes(multiplicationContent.replace('&times;', '×'))).toEqual(true);
      expect(title?.innerHTML).toEqual('Multiply | Cohort Project Starter');
      expect(description?.getAttribute('content')).toEqual('This is the math page. View the results of sums, subtractions, multiplications, and divisions here.');
    });

    it('renders the "divide" page correctly', () => {
      document.documentElement.innerHTML = math('divide', '2 &divide; 2 = 1');
      const main = document.querySelector('main');
      const title = document.querySelector('title');
      const description = document.querySelector('meta[name="description"]');

      expect(main?.innerHTML.includes(divisionContent.replace('&divide;', '÷'))).toEqual(true);
      expect(title?.innerHTML).toEqual('Divide | Cohort Project Starter');
      expect(description?.getAttribute('content')).toEqual('This is the math page. View the results of sums, subtractions, multiplications, and divisions here.');
    });
  });
});
