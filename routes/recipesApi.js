const express = require('express')
const router = express.Router()
const service = require('../service/Server_Functionalities');




dairyIngredients = ["Cream","Cheese","Milk","Butter","Creme","Ricotta","Mozzarella","Custard","Cream Cheese"]
glutenIngredients = ["Flour","Bread","spaghetti","Biscuits","Beer"]



router.post('/recipes',async function (req,res) {
    let ingredient = req.body.ingredient
    let recipes = await service.getRecipes(ingredient)
    
    res.send(recipes.map(recipe => service.recipesPattern(recipe)))
})

router.post('/recipes/noDairy',async function (req,res) {
    let ingredient = req.body.ingredient
    let recipes = await service.getRecipes(ingredient)
    let filteredRecipes = service.filterRecipes(recipes,dairyIngredients)

    res.send(filteredRecipes.map(recipe => service.recipesPattern(recipe)))
})

router.post('/recipes/noGluten',async function (req,res) {
    let ingredient = req.body.ingredient
    let recipes = await service.getRecipes(ingredient)
    let filteredRecipes = service.filterRecipes(recipes,glutenIngredients)

    res.send(filteredRecipes.map(recipe => service.recipesPattern(recipe)))
})

module.exports = router