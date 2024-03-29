import SearchController from '../controllers/SearchController.mjs';
import allDropdownsComponent from '../components/all_dropdown/allDropdownsComponent.mjs';
import lengthRecipesComponent from '../components/length_recipes/lengthRecipesComponent.mjs';
import allRecipesComponent from '../components/all_recipes/allRecipesComponent.mjs';
import allTagsComponent from '../components/all_tags/allTagsComponent.mjs';
import SearchTagEvent from '../utils/searchTagEvent.mjs';

const Interface = (): void => {
  const { recipes, dropdowns } = SearchController();

  SearchTagEvent(dropdowns);

  allDropdownsComponent(dropdowns);
  lengthRecipesComponent(recipes.length);
  allRecipesComponent(recipes);
  allTagsComponent();
};

export default Interface;
