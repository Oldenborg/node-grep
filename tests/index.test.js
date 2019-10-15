const { grep } = require('../src/index.js');
const mockfs = require('mock-fs');; 

describe('node-grep', () => {

  afterEach(mockfs.restore);

  describe('thrown errors', () => {
    it('throws an error if a parameter is not passed to the function', async () => {
      expect.assertions(1);
      try {
        await grep();
      } catch (e) {
        expect(e).toMatch('A search term is required');
      }
    });

    it('throws an error if the first parameter is a string', async () => {
      expect.assertions(1);
      try {
        await grep(123);
      } catch (e) {
        expect(e).toMatch('Search term must be a string');
      }
    });
  });

  describe('returned values', () => {
    it('returns an object', async () => {
      const result = await grep('example')
      expect(typeof result).toBe("object");
    });

    it('returns a result count', async () => {
      const result = await grep('example');
      expect(result.count).toBe(0);
    });

    it('returns the searched term', async () => {
      const terms = [
        'this is',
        'some strings we',
        'want to search for'
      ];

      for (term of terms) {
        let result = await grep(term);
        expect(result.term).toBe(term);
      }
    });
/*
    it('returns the dir to be searched which defaults to the current working directory', () => {

      expect(grep('example').dir).toBe(process.cwd());
      expect(grep('example','/src/path/to/grep/in').dir).toBe('/src/path/to/grep/in');
      expect(grep('example','///src/path////to///grep/in').dir).toBe('/src/path/to/grep/in');
    });
    
    it('returns a correctly formatted match array when searching', () => { 
      mockfs({
        'path/to/fake/dir': {
          'some-file.txt': 'Some example content here',
        }
      });
      expect(grep('example').matches).toEqual([
        {
          file: 'path/to/fake/dir/some-file.txt',
          match: 'Some example content here',
          line: 1
        }
      ]);
    });
    */
  });
});
