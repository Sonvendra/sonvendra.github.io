(function($) {

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function(event) {

    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});



function myFunction(x) {
    if (x.matches) { // If media query matches
        element1.classList.remove("down-remove");
        element2.classList.remove("down-remove");
        element3.classList.remove("down-remove");
        element4.classList.remove("down-remove");
        element5.classList.remove("down-remove");
        element6.classList.remove("down-remove");
    } else {
        console.log("Media Query Not Matches")
    }
}
var element1 = document.getElementById("cRemove1");
var element2 = document.getElementById("cRemove2");
var element3 = document.getElementById("cRemove3");
var element4 = document.getElementById("cRemove4");
var element5 = document.getElementById("cRemove5");
var element6 = document.getElementById("cRemove6");
var x = window.matchMedia("(max-width: 800px)");
myFunction(x);// Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes