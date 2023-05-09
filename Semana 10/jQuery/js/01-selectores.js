$(document).ready(function()
{
    //selector por id
   var rojo=$("#rojo").css("background", "red");
   var amarillo=$("#amarillo").css("background", "yellow")
                            .css("color","red");

    var verde=$("#verde").css("background", "green")
                            .css("color","white");
    //Selector por clase
    var miClase=$(".zebra");
    miClase.css("padding","20px");

    //selector por etiqueta
    var parrafos=$("p").css("cursor", "pointer");

    //Selector de varias etiquetas
    $('p,a').addClass("grande");

    //Selector por atributos
    $('[title="Google"]').css("background","green");
    $('[title="Facebook"]').css("background","blue");
});