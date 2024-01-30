import createElement from '../../ui/createElement.mjs';
const recipeComponentBodyTitle = (recipe) => {
    const divAttributes = {};
    const divClass = ['recipe-body-title'];
    const divContent = recipe.name;
    return createElement('h2', divAttributes, divClass, divContent);
};
export default recipeComponentBodyTitle;
