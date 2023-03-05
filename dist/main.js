


function searchRecipes() {
    let ingredient = $("#ingredient").val()
    $.post('/recipes',{"ingredient" : ingredient},function (response) {
        console.log(response);
    })
}

function dairyFilter(params) {
    let ingredient = $("#ingredient").val()
    $.post('/recipes/noDairy',{"ingredient" : ingredient},function (response) {
        console.log(response);
    })
}

function glutenFilter(params) {
    let ingredient = $("#ingredient").val()
    $.post('/recipes/noGluten',{"ingredient" : ingredient},function (response) {
        console.log(response);
    })
    
}