class RenderPage {
    constructor(){

    }

    createPagination(){
        $(document).ready(function () {
            var show_per_page = 4; 
            var number_of_items = $('#pagingBox').children().length;
            var number_of_pages = Math.ceil(number_of_items/show_per_page);
            $('#current_page').val(0);
            $('#show_per_page').val(show_per_page);
            var navigation_html = '<button class="previous_link" onclick="previous()">Prev</button>';
            var current_link = 0;
            while(number_of_pages > current_link){
                navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
                current_link++;
            }
            
            navigation_html += '<button class="next_link" onclick="next()">Next</button>';
            $('#page_navigation').append(navigation_html);
            $('#page_navigation .page_link:first').addClass('active_page');
            $('#pagingBox').children().css('display', 'none');
            $('#pagingBox').children().slice(0, show_per_page).css('display', 'block');
        });
    }

    renderPage(recipes){
        $("#pagingBox").empty()
        $("#page_navigation").empty()
        
        const source = $('#recipes-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({recipes});
        $("#pagingBox").append(newHTML)
    }
}