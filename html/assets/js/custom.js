// custom js page


// headroom sticky top bar
// grab an element
var myElement = document.querySelector("section.o-brand");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
    "offset": 10,
    "tolerance": 10
});
// initialise
headroom.init();


// scroll to top
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn(2000);
        }else{
            $('#scroll').fadeOut(2000);
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });
});


