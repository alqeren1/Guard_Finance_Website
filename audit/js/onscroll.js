$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("navbar-fall");
    }
    if (scroll == 0) {
        //clearHeader, not clearheader - caps H
        $(".navbar").removeClass("navbar-fall");
    }
}); //missing );



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar").addClass("addcolor-nav");
    } else {
        $(".navbar").removeClass("addcolor-nav");
    }
});

var headerHeight = jQuery('.navbar').outerHeight();
    jQuery('.navbar-nav li a').on('click', function(event) {
        jQuery('.navbar-nav li').removeClass('active');
        jQuery(this).parent().addClass('active');
        var $anchor = jQuery(this);
        
        jQuery('html, body').stop().animate({
            scrollTop: jQuery($anchor.attr('href')).offset().top-headerHeight
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    
    jQuery(".navbar-nav li a").on("click",function(event){
        jQuery(".navbar-collapse").removeClass('show');
        jQuery('.navbar-toggler').addClass('collapsed');
    });
    
    jQuery('.tilt-img img').tilt({
        maxTilt:6                   
    });
    

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 1500) {
        //clearHeader, not clearheader - caps H
        $(".fill-scroll").addClass("fill-serv");
    }
    if (scroll == 1500) {
        //clearHeader, not clearheader - caps H
        $(".fill-scroll").removeClass("fill-serv");
    }
});



