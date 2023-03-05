let renderer = new RenderPage()



function previous(){
    new_page = parseInt($('#current_page').val()) - 1;
    if($('.active_page').prev('.page_link').length==true){
        go_to_page(new_page);
    }
}
    
function next(){
    new_page = parseInt($('#current_page').val()) + 1;
    if($('.active_page').next('.page_link').length==true){
        go_to_page(new_page);
    }
}
function go_to_page(page_num){
    var show_per_page = parseInt($('#show_per_page').val());
    start_from = page_num * show_per_page;
    end_on = start_from + show_per_page;
    $('#pagingBox').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
    $('#current_page').val(page_num);
}

function searchRecipes() {
    let ingredient = $("#ingredient").val()
    $.post('/recipes',{"ingredient" : ingredient},function (response) {
        renderer.renderPage(response)
        renderer.createPagination()
    })
}

function dairyFilter(params) {
    let ingredient = $("#ingredient").val()
    $.post('/recipes/noDairy',{"ingredient" : ingredient},function (response) {
        renderer.renderPage(response)
        renderer.createPagination()
    })
}

function glutenFilter(params) {
    let ingredient = $("#ingredient").val()
    $.post('/recipes/noGluten',{"ingredient" : ingredient},function (response) {
        renderer.renderPage(response)
        renderer.createPagination()
    })
    
}

