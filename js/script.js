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

}
