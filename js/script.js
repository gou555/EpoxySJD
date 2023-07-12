window.onload = function () {
    document.addEventListener("click", function (event) {
        // if the clicked element isn't child of the navbar, you must close it if is open
        if (!event.target.closest("#navbar_id") && document.getElementById("navbarToggler").classList.contains("show")) {
            document.getElementById("menu_toggler_btn").click();
        }
    });

    element = document.getElementById('navbarToggler');
    element.addEventListener("click", function (event) {
      $('.navbar-collapse').collapse('hide');
    });
    
    $("#close-btn").click(function(){
        // remove active class from all images
       $(".small-image").removeClass('active');
       $("#show_image_popup").slideUp();
     })
 
     $(".small-image").click(function(){
         // remove active class from all images
        $(".small-image").removeClass('active');
       // add active class
        $(this).addClass('active');
 
       var image_path = $(this).attr('src'); 
       $("#show_image_popup").fadeOut();
       // now st this path to our popup image src
       $("#show_image_popup").fadeIn();
       $("#large-image").attr('src',image_path);
 
     })
    
}








