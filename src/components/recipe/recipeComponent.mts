import { T_ElementAttributes, T_Recipe } from '../../type/type.mjs';
import createElement from '../ui/createElement.mjs';
import recipeComponentHeader from './recipe_component_header/recipeComponentHeader.mjs';
import recipeComponentBody from './recipe_component_body/recipeComponentBody.mjs';

const recipeComponent = (recipe: T_Recipe) => {
  const divAttributes: T_ElementAttributes = {
    tabindex: 0,
    role: 'article',
    ariaLabel: recipe.name,
  };
  const divClass: string[] = ['recipe', 'rounded'];
  const divElement: HTMLElement = createElement('article', divAttributes, divClass);

  divElement.appendChild(recipeComponentHeader(recipe));
  divElement.appendChild(recipeComponentBody(recipe));

  return divElement;
}

export default recipeComponent;
