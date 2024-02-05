import recipes from '../models/recipes.mjs';
import SessionStorage from '../controllers/SessionStorage.mjs';
/**
 * Search for individual words in the name, ingredients, description, appliance, and ustensils of all recipes.
 * Uses the search string stored in sessionStorage.
 * @returns {T_Recipe[]} - Recipes that contain all the search terms.
 */
const search = () => {
    /**
     * Retrieve search and tags from sessionStorage.
     * @type {{ search: T_SearchInSessionStorage, tags: T_TagInSessionStorage }}
     */
    const { search, tags } = SessionStorage().getSearchAndTags();
    /**
     * Convert the search string and tags into arrays of lowercase search terms.
     * @type {string[]}
     */
    const tagsTerms = Array.isArray(tags) ? tags.map(tag => tag.toLowerCase()) : [];
    /**
     * Convert the search string into an array of lowercase search terms.
     * @type {string[]}
     */
    const searchTerms = (search || '').toLowerCase().split(' ');
    /**
     * Combine search and tags into a single array of lowercase terms.
     * @type {string[]}
     */
    const allTerms = searchTerms.concat(tagsTerms);
    /**
     * Filter recipes based on whether they contain all the search terms.
     */
    return recipes.filter(recipe => {
        return allTerms.every(term => {
            // Search in the name
            if (recipe.name.toLowerCase().includes(term))
                return true;
            // Search in the description
            if (recipe.description.toLowerCase().includes(term))
                return true;
            // Search in the ingredients
            if (recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(term)))
                return true;
            // Search in the appliance
            if (recipe.appliance.toLowerCase().includes(term))
                return true;
            // Search in the ustensils
            if (recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(term)))
                return true;
            // The term was not found in this recipe
            return false;
        });
    });
};
export default search;
