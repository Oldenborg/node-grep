const fs = require('fs');

module.exports = (term, dir) => {

  if(!term) {
    throw "A search term is required";
  }

  if(!dir) {
    dir = process.cwd();
  }

  if(typeof term !== "string") {
    throw "Search term must be a string";
  }

  dir = path.resolve(dir);

  return {
    dir,
    term,
    count: 0
  }
}
