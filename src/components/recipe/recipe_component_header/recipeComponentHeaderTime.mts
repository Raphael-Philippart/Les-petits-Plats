import { T_ElementAttributes, T_Recipe } from '../../../type/type.mjs';
import createDivContainer from '../../ui/createDivContainer.mjs';

const recipeComponentHeaderTime = (recipe: T_Recipe) => {
  const divAttributes: T_ElementAttributes = {};
  const divClass: string[] = ['recipe-header-time', 'rounded'];
  const divContent = `${recipe.time}min`;

  return createDivContainer(divAttributes, divClass, divContent);
}

export default recipeComponentHeaderTime;
