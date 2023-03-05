const axios = require('axios');
const RECIPES_API = 'https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/'


function filterRecipes(recipes,ingredientsArray) {
    let filteredRecipes = []
    
    for (const recipe of recipes) {
        const contains = ingredientsArray.some(ingredient => {
            return recipe.ingredients.includes(ingredient);
        });
        if(!contains){
            filteredRecipes.push(recipe)
        }
    }

    return filteredRecipes ;
}

async function getRecipes(ingredient) {
    let recipesObject = await axios.get(`${RECIPES_API}${ingredient}`)
    let recipes = recipesObject.data.results
    return recipes
}


function recipesPattern ({idMeal,ingredients,title,thumbnail,href}) {
    return {idMeal,ingredients,title,thumbnail,href}
}


module.exports = {
    filterRecipes,
    getRecipes,
    recipesPattern
};