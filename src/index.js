const fs = require('fs');
const path = require('path');


async function grep(term, dir) {
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

  if(!fs.existsSync(dir)) return;

/*
  const start = fs.readdirSync(dir);
  const matches = resolveFiles(dir);

  const items = await fs.readdirSync(dir);

  if(items.length === 0) return;
  for (item in items) {
    const itemPath = path.resolve(dir, items[item]);
    if(fs.statSync(itemPath).isDirectory()) {
      await resolveFiles(itemPath);
    } else {
      console.log(itemPath);
    }
  }
*/
  return {
    dir,
    term,
    count: 0,
    matches: [
      {
        file: 'path/to/fake/dir/some-file.txt',
        match: 'Some example content here',
        line: 1
      }
    ]
  }
}

module.exports.grep = grep;
/*

const resolveFiles = async dir => {

}
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

  const start = fs.readdirSync(dir);

  const matches = resolveFiles(dir);

  return {
    dir,
    term,
    count: 0,
    matches: [
      {
        file: 'path/to/fake/dir/some-file.txt',
        match: 'Some example content here',
        line: 1
      }
    ]
  }
}
*/
