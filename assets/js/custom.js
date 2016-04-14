$(document).ready(function(){

    // old school jquery quicksearch
    $('input#filter-skills').quicksearch('.skills-row');

    // show/hide the logo based on scroll position
    $(window).on('scroll', function() {
        var offset = window.pageYOffset;
        var position = 256;

        if(offset > position) {
            $('.side-logo').fadeIn( "slow" );
        } else {
            $('.side-logo').fadeOut("slow" );
        }
    });

    // scroll to the top slowly
    $('#home-scroll').click(function(){
        $('html, body').animate({
            scrollTop:0},
            'slow'
        );
        return false;
    })

    // hijack the ENTER key when filtering
    $(':input').keypress(function(e) {
        var code = e.keyCode || e.which;
        if(code == 13){
            return false;
        }
    });
});
