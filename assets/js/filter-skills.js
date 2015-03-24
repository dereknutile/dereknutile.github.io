
$(document).ready(function(){

    // find filter
    $('input#filter-skills').quicksearch('.skills-row', {
        'delay': 500,
        'bind': 'keyup keydown',
        'onBefore': function () {
            clearSessionDisplays();
        }
    });


    function clearSessionDisplays () {
        $('.sessionDisplays').empty().hide();
        $('.event-presenters').show();
    }

});
