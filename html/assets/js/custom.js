// custom js page


// headroom
// grab an element
var myElement = document.querySelector("section.o-brand");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
    "offset": 10,
    "tolerance": 10
});
// initialise
headroom.init();


