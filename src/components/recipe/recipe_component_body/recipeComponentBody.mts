import { T_ElementAttributes, T_Recipe } from '../../../type/type.mjs';
import createDivContainer from '../../ui/createDivContainer.mjs';
import recipeComponentBodyTitle from './recipeComponentBodyTitle.mjs';
import recipeComponentBodyDescription from './recipeComponentBodyDescription.mjs';
import recipeComponentBodyIngredients from './recipeComponentBodyIngredients.mjs';

const recipeComponentBody = (recipe: T_Recipe) => {
  const divAttributes: T_ElementAttributes = {
    role: 'document',
  };
  const divClass: string[] = ['recipe-body'];
  const divElement = createDivContainer(divAttributes, divClass);

  divElement.appendChild(recipeComponentBodyTitle(recipe));
  divElement.appendChild(recipeComponentBodyDescription(recipe));
  divElement.appendChild(recipeComponentBodyIngredients(recipe));

  return divElement
}

export default recipeComponentBody;
