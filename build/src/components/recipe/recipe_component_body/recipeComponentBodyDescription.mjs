import createElement from '../../ui/createElement.mjs';
import { shortenedText } from '../../ui/shortenedText.mjs';
const recipeComponentBodyDescription = (recipe) => {
    const divClass = ['recipe-body-description'];
    const h3Content = 'RECETTE';
    const divElement = createElement('div', undefined, divClass);
    const h3Element = createElement('h3', undefined, undefined, h3Content);
    divElement.appendChild(h3Element);
    divElement.appendChild(shortenedText(recipe.description, 160));
    return divElement;
};
export default recipeComponentBodyDescription;
