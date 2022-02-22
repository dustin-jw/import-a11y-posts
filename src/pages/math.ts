import layout from '../partials/layout';
import capitalize from '../js/utilities/capitalize';

const mathPageContent = (title: string, equation: string): string => `
  <h1>${title}</h1>

  <p>
    ${equation}
  </p>
`;

const math = (operation: 'add' | 'subtract' | 'multiply' | 'divide', equation: string): string => {
  const title = capitalize(operation);
  const content = mathPageContent(title, equation);

  return layout({
    content,
    pageTitle: title,
    description: 'This is the math page. View the results of sums, subtractions, multiplications, and divisions here.',
  });
};

export { math, mathPageContent };
