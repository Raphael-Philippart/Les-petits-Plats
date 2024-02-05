/**
 * Extracts unique ingredients, appliances, and ustensils from a list of recipes.
 * @param {T_Recipe[]} recipes - The list of recipes.
 * @returns {T_DropdownOptions} - Object containing unique options for ingredients, appliances, and ustensils.
 */
const ExtractDropdownOptions = (recipes) => {
    const ingredientsSet = new Set();
    const appliancesSet = new Set();
    const ustensilsSet = new Set();
    // Iterate through each recipe
    recipes.forEach(recipe => {
        // Extract unique ingredients
        recipe.ingredients.forEach(ingredient => {
            ingredientsSet.add(ingredient.ingredient.toLowerCase());
        });
        // Extract unique appliance
        appliancesSet.add(recipe.appliance.toLowerCase());
        // Extract unique ustensils
        recipe.ustensils.forEach(ustensil => {
            ustensilsSet.add(ustensil.toLowerCase());
        });
    });
    return {
        ingredients: {
            title: 'Ingrédients',
            data: Array.from(ingredientsSet)
        },
        appliances: {
            title: 'Appareils',
            data: Array.from(appliancesSet)
        },
        ustensils: {
            title: 'Ustensiles',
            data: Array.from(ustensilsSet)
        },
    };
};
export default ExtractDropdownOptions;
