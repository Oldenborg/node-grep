const grep = require('../src/index.js');

describe('node-grep', () => {
  describe('thrown errors', () => {
    it('throws an error if a parameter is not passed to the function', () => {
      expect(() => {
        grep();
      }).toThrow('A search term is required');
    });

    it('throws an error if the first parameter is a string', () => {
      expect(() => {
        grep(123);
      }).toThrow('Search term must be a string');
    });
  });

  describe('returned values', () => {
    it('returns an object of result data', () => {
      expect(typeof grep('example')).toBe("object");
    });

    it('returns a result count', () => {
      expect(grep('example').count).toBe(0);
    });

    it('returns the searched term', () => {
      expect(grep('example').term).toBe('example');
      expect(grep('can be altered').term).toBe('can be altered');
      expect(grep('so we are sure its the input').term).toBe('so we are sure its the input');
    });

    it('returns the dir to be searched which defaults to "."', () => {
      expect(grep('example').dir).toBe('.');
    });
  });
});
