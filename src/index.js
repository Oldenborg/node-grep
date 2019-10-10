module.exports = (term, directory) => {

  if(!term) {
    throw "A search term is required";
  }

  if(typeof term !== "string") {
    throw "Search term must be a string";
  }

  return {
    term: term,
    count: 0
  }
}
