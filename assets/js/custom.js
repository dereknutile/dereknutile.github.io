$(document).ready(function(){

    $('input#filter-skills').quicksearch('.skills-row');

    $(window).on('scroll', function() {
        var offset = window.pageYOffset;
        var position = 256;

        if(offset > position) {
            $('.side-logo').fadeIn( "slow" );
        } else {
            $('.side-logo').fadeOut("slow" );
        }
    });

});
