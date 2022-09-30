// Gdy strona załadowana to ruszamy z skryptem
$(document).ready(function(){

    $("#btn-hello").click(function(){
        alert("Hello World!");
    });
    
    $("#btn-show").click(function(){
        // $("#offer").show(300);
        // $("#offer").slideDown(300);
        $("#offer").fadeIn(300);
    });

    $("#btn-hide").click(function(){
        // $("#offer").hide(300);
        // $("#offer").slideUp(300);
        $("#offer").fadeOut(300);
    });

    $("#btn-toggle").click(function(){
        // $("#offer").toggle(300);
        // $("#offer").hide(300);
        $("#offer").fadeToggle(300);
    });

    $("#btn-mouse").mouseover(function(){
        $("#offer").slideDown(300);
    });

    $("#btn-mouse").mouseout(function(){
        $("#offer").slideUp(300);
    });

    $(".btn-prize").click(function(){
        $(".btn-prize").attr("disabled", "true");
        $(this).fadeOut(300);
    });

});
