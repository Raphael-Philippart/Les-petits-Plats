import createElement from '../../ui/createElement.mjs';
import { shortenedText } from '../../ui/shortenedText.mjs';
import { T_Recipe } from '../../../type/type.mjs';

const recipeComponentBodyDescription = (recipe: T_Recipe) => {
  const divClass: string[] = ['recipe-body-description'];
  const h3Content: string = 'RECETTE';
  const divElement: HTMLDivElement = createElement('div', undefined, divClass);
  const h3Element: HTMLHeadingElement = createElement('h3', undefined, undefined, h3Content);

  divElement.appendChild(h3Element);
  divElement.appendChild(shortenedText(recipe.description, 160));

  return divElement;
}

export default recipeComponentBodyDescription;
