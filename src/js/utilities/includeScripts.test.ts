import includeScripts, { attribute } from './includeScripts';

describe('includeScripts', () => {
  describe('attribute', () => {
    it('returns type="module" for module types', () => {
      expect(attribute('module')).toEqual(' type="module"');
    });

    it('returns nomodule for nomodule types', () => {
      expect(attribute('nomodule')).toEqual(' nomodule');
    });

    it('returns async for async scripts', () => {
      expect(attribute('async')).toEqual(' async');
    });

    it('returns defer for defer scripts', () => {
      expect(attribute('defer')).toEqual(' defer');
    });

    it('returns an empty string for non-specified scripts', () => {
      expect(attribute()).toEqual('');
    });
  });

  describe('includeScripts', () => {
    it('returns a script tag with a src attribute', () => {
      expect(includeScripts([{ src: '/public/home.js' }])).toEqual('<script src="/public/home.js"></script>');
    });

    it('handles the module/nomodule pattern', () => {
      expect(includeScripts([
        {
          src: '/public/home.js',
          type: 'module',
        },
        {
          src: '/public/home.legacy.js',
          type: 'nomodule',
        },
      ])).toEqual('<script src="/public/home.js" type="module"></script><script src="/public/home.legacy.js" nomodule></script>');
    });

    it('handles async scripts', () => {
      expect(includeScripts([
        {
          src: '/public/home.js',
          asyncDefer: 'async',
        },
      ])).toEqual('<script src="/public/home.js" async></script>');
    });

    it('handles defer scripts', () => {
      expect(includeScripts([
        {
          src: '/public/home.js',
          asyncDefer: 'defer',
        },
      ])).toEqual('<script src="/public/home.js" defer></script>');
    });

    it('can do it all at once', () => {
      expect(includeScripts([
        {
          src: '/public/home.js',
          type: 'module',
          asyncDefer: 'async',
        },
        {
          src: '/public/home.legacy.js',
          type: 'nomodule',
          asyncDefer: 'async',
        },
      ])).toEqual('<script src="/public/home.js" type="module" async></script><script src="/public/home.legacy.js" nomodule async></script>');
    });
  });
});
