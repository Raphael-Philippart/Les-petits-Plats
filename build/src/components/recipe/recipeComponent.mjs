import createElement from '../ui/createElement.mjs';
import recipeComponentHeader from './recipe_component_header/recipeComponentHeader.mjs';
import recipeComponentBody from './recipe_component_body/recipeComponentBody.mjs';
const recipeComponent = (recipe) => {
    const divAttributes = {
        tabindex: 0,
        role: 'article',
        ariaLabel: recipe.name,
    };
    const divClass = ['recipe', 'rounded'];
    const divElement = createElement('article', divAttributes, divClass);
    divElement.appendChild(recipeComponentHeader(recipe));
    divElement.appendChild(recipeComponentBody(recipe));
    return divElement;
};
export default recipeComponent;
