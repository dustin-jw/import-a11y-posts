import layout from '../partials/layout';

const notFoundContent = (): string => `
  <h1>404 Not Found</h1>

  <p>
    We couldn't find what you were looking for.
  </p>
  <p>
    <a href="/">Home Page</a>
  </p>
`;

const notFound = () => {
  const content = notFoundContent();

  return layout({
    content,
    pageTitle: '404 Not Found',
    description: "We couldn't find what you were looking for.",
  });
};

export { notFound, notFoundContent };
