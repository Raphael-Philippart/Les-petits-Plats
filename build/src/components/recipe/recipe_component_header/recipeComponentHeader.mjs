import createElement from '../../ui/createElement.mjs';
import createDivContainer from '../../ui/createDivContainer.mjs';
import recipeComponentHeaderTime from './recipeComponentHeaderTime.mjs';
const recipeComponentHeader = (recipe) => {
    const imageAttributes = {
        src: `public/img/recette/${recipe.image}`,
        alt: `${recipe.name}`,
    };
    const divClass = ['recipe-header'];
    const imageClass = ['responsive-image', 'rounded-top'];
    const imageElement = createElement('img', imageAttributes, imageClass);
    const divElement = createDivContainer(undefined, divClass);
    divElement.appendChild(imageElement);
    divElement.appendChild(recipeComponentHeaderTime(recipe));
    return divElement;
};
export default recipeComponentHeader;
