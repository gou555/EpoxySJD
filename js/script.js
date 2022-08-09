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

/*$(document).on('click', '#btnContactUs', function(){
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
            Password : "988C58757369BE7B208B583701816EA3292E",
            To : "willgoulet555@gmail.com",
            From : "epoxysjdmail@gmail.com",
            Subject : "subject",
            Body : "body"
        }).then(
          message => alert(message)
        );
    }
    return false;
  });*/

/*$(document).on('click', '#btnContactUs', function(){
    $.ajax({
    type: "POST",
    url: "http://localhost/mail.php",
    data: { name: "John" }
    }).done(function( ) {
      alert("test'");
    });
});*/


  /*$.ajax({
    type: "POST",
    url: "mail.php",
    data: { name: "John" }
  }).done(function( ) {
      alert('test');
  });*/