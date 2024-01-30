import createElement from '../../ui/createElement.mjs';
import { T_Ingredients, T_Recipe } from '../../../type/type.mjs';

const recipeComponentBodyIngredients = (recipe: T_Recipe) => {
  const divClass: string[] = ['recipe-body-ingredients'];
  const h3Content: string = 'INGRÉDIENTS';

  const divElement: HTMLDivElement = createElement('div', undefined, divClass);
  const h3Element: HTMLHeadingElement = createElement('h3', undefined, undefined, h3Content);

  divElement.appendChild(h3Element);

  for (const ingredient of recipe.ingredients) {
    divElement.appendChild(bodyIngredient(ingredient));
  }

  return divElement;
};

const bodyIngredient = (ingredient: T_Ingredients) => {
  const divClass: string[] = ['body-ingredient'];
  const paragraphContentIngredient = `${ingredient.ingredient}`;

  const divContent: HTMLDivElement = createElement('div', undefined, divClass);
  const paragraphIngredient: HTMLParagraphElement = createElement('p', undefined, undefined, paragraphContentIngredient);

  divContent.appendChild(paragraphIngredient);

  if (ingredient.quantity) {
    let paragraphIngredientQuantity = `${ingredient.quantity}`;

    if (ingredient.unit) {
      paragraphIngredientQuantity += ` ${ingredient.unit}`;
    }
    const paragraphIngredientUnitClass: string[] = ['body-ingredient-quantity'];

    const paragraphIngredientUnit: HTMLParagraphElement = createElement('p', undefined, paragraphIngredientUnitClass, paragraphIngredientQuantity);
    divContent.appendChild(paragraphIngredientUnit);
  }

  return divContent;
};

export default recipeComponentBodyIngredients;
