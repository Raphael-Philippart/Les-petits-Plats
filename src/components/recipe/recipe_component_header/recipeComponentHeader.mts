import { T_ElementAttributes, T_Recipe } from '../../../type/type.mjs';
import createElement from '../../ui/createElement.mjs';
import createDivContainer from '../../ui/createDivContainer.mjs';
import recipeComponentHeaderTime from './recipeComponentHeaderTime.mjs';

const recipeComponentHeader = (recipe: T_Recipe) => {
  const imageAttributes: T_ElementAttributes = {
    src: `/public/img/recette/${recipe.image}`,
    alt: `${recipe.name}`,
  };
  const divClass: string[] = ['recipe-header'];
  const imageClass: string[] = ['responsive-image', 'rounded-top'];
  const imageElement: HTMLImageElement = createElement('img', imageAttributes, imageClass);
  const divElement: HTMLDivElement = createDivContainer(undefined, divClass);

  divElement.appendChild(imageElement);
  divElement.appendChild(recipeComponentHeaderTime(recipe));

  return divElement;
}

export default recipeComponentHeader
