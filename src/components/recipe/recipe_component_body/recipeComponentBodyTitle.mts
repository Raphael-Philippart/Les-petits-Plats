import { T_ElementAttributes, T_Recipe } from '../../../type/type.mjs';
import createElement from '../../ui/createElement.mjs';

const recipeComponentBodyTitle = (recipe: T_Recipe) => {
  const divAttributes: T_ElementAttributes = {};
  const divClass: string[] = ['recipe-body-title'];
  const divContent = recipe.name;

  return createElement('h2', divAttributes, divClass, divContent);
};

export default recipeComponentBodyTitle;
