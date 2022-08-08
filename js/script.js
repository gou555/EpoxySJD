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

$(document).on('click', '#btnContactUs', function(){
    var em = $("#email").val();
    var na = $("#name").val();
    var msg = $("#message").val();


    var dataString = 'email=' + em + '&name=' + na + '&msg=' + msg;
    if(em==""||na==""||msg=="")
    {
        $("#display").html("<div class='alert alert-warning'>Veuillez compléter tous les champs.</div>");
    }
    else
    {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "epoxysjdmail@gmail.com",
            Password : "45C461DA9D4FD4DA53678CD025C0C2790CC2",
            To : "willgoulet555@gmail.com",
            From : "epoxysjdmail@gmail.com",
            Subject : "subject",
            Body : "body"
        }).then(
          message => alert(message)
        );
    }
    return false;
  });