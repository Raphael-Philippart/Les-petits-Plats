import createElement from '../../ui/createElement.mjs';
const recipeComponentBodyIngredients = (recipe) => {
    const divClass = ['recipe-body-ingredients'];
    const h3Content = 'INGRÉDIENTS';
    const divElement = createElement('div', undefined, divClass);
    const h3Element = createElement('h3', undefined, undefined, h3Content);
    divElement.appendChild(h3Element);
    for (const ingredient of recipe.ingredients) {
        divElement.appendChild(bodyIngredient(ingredient));
    }
    return divElement;
};
const bodyIngredient = (ingredient) => {
    const divClass = ['body-ingredient'];
    const paragraphContentIngredient = `${ingredient.ingredient}`;
    const divContent = createElement('div', undefined, divClass);
    const paragraphIngredient = createElement('p', undefined, undefined, paragraphContentIngredient);
    divContent.appendChild(paragraphIngredient);
    if (ingredient.quantity) {
        let paragraphIngredientQuantity = `${ingredient.quantity}`;
        if (ingredient.unit) {
            paragraphIngredientQuantity += ` ${ingredient.unit}`;
        }
        const paragraphIngredientUnitClass = ['body-ingredient-quantity'];
        const paragraphIngredientUnit = createElement('p', undefined, paragraphIngredientUnitClass, paragraphIngredientQuantity);
        divContent.appendChild(paragraphIngredientUnit);
    }
    return divContent;
};
export default recipeComponentBodyIngredients;
