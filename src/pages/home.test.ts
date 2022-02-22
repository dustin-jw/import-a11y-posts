import { home, homePageContent } from '.';

const content = `
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

describe('home page', () => {
  describe('homePageContent', () => {
    it('renders the home page content correctly', () => {
      expect(homePageContent()).toEqual(content);
    });
  });

  describe('home', () => {
    it('renders the home page correctly', () => {
      document.documentElement.innerHTML = home();
      const title = document.querySelector('title');
      const description = document.querySelector('meta[name="description"]');
      const script = document.querySelector('script');

      expect(title?.innerHTML).toEqual('Home | Cohort Project Starter');
      expect(description?.getAttribute('content')).toEqual('This is the home page.');
      expect(script?.getAttribute('src')).toEqual('/public/home.js');
    });
  });
});
