import { notFound, notFoundContent } from '.';

const content = `
  <h1>404 Not Found</h1>

  <p>
    We couldn't find what you were looking for.
  </p>
  <p>
    <a href="/">Home Page</a>
  </p>
`;

describe('404 page', () => {
  describe('notFoundContent', () => {
    it('renders the 404 page content correctly', () => {
      expect(notFoundContent()).toEqual(content);
    });
  });

  describe('notFound', () => {
    it('renders the 404 page correctly', () => {
      document.documentElement.innerHTML = notFound();
      const title = document.querySelector('title');
      const description = document.querySelector('meta[name="description"]');

      expect(title?.innerHTML).toEqual('404 Not Found | Cohort Project Starter');
      expect(description?.getAttribute('content')).toEqual("We couldn't find what you were looking for.");
    });
  });
});
