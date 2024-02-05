import ExtractDropdownOptions from './ExtractDropdownOptions.mjs';
import search from '../utils/search.mjs';
const SearchController = () => {
    const recipes = search();
    const dropdowns = ExtractDropdownOptions(recipes);
    return { recipes, dropdowns };
};
export default SearchController;
