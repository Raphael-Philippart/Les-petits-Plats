import { T_DropdownOptions, T_Recipe } from '../type/type.mjs';
import ExtractDropdownOptions from './ExtractDropdownOptions.mjs';
import search from '../utils/search.mjs';

const SearchController: () => { recipes: T_Recipe[]; dropdowns: T_DropdownOptions } = () => {
  const recipes = search();
  const dropdowns = ExtractDropdownOptions(recipes);

  return { recipes, dropdowns };
};

export default SearchController;
