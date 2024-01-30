/**
 * Searches for a term in an array of strings and returns the matches.
 * @param {string} term - The term to search for.
 * @param {string[]} options - The array of strings to search in.
 * @returns {string[]} - The found matches.
 */
const searchOptions = (term: string, options: string[]): string[] => {
  const lowerCaseTerm = term.toLowerCase();
  return options.filter(option => option.toLowerCase().includes(lowerCaseTerm));
}

export default searchOptions;
