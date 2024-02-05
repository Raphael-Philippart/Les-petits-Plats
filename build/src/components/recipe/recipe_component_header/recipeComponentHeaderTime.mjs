import createDivContainer from '../../ui/createDivContainer.mjs';
const recipeComponentHeaderTime = (recipe) => {
    const divAttributes = {};
    const divClass = ['recipe-header-time', 'rounded'];
    const divContent = `${recipe.time}min`;
    return createDivContainer(divAttributes, divClass, divContent);
};
export default recipeComponentHeaderTime;
