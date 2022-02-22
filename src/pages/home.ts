import layout from '../partials/layout';

const homePageContent = (): string => `
  <h1>Hello World!</h1>

  <p>
    Welcome to the home page!
  </p>

  <div>
    <button type="button" data-increment>
      Click Me!
    </button>
  </div>

  <p>
    Click Count: <span data-counter>0</span>
  </p>
`;

const home = () => {
  const content = homePageContent();
  const scripts = [
    {
      src: '/public/home.js',
    },
  ];

  return layout({
    content,
    pageTitle: 'Home',
    description: 'This is the home page.',
    scripts,
  });
};

export { home, homePageContent };
