import removeChild from '../../utils/removeChild.mjs';
import recipeComponent from '../recipe/recipeComponent.mjs';
import recipeComponentError from '../recipe/recipe_component_error/recipeComponentError.mjs';
const allRecipesComponent = (recipes) => {
    const sectionRecipes = document.querySelector('#recipes');
    removeChild(sectionRecipes);
    if (recipes.length === 0)
        sectionRecipes.appendChild(recipeComponentError());
    for (const recipe of recipes)
        sectionRecipes.appendChild(recipeComponent(recipe));
};
export default allRecipesComponent;
