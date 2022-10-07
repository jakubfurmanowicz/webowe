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

    $(".btn-who").click(function(){

        // Pobranie tekstu
        let name = $(this).text();

        // Ustawienie tekstu
        $("#who").text(name);
    });

    $(".btn-quote").click(function(){

        let quote = $(this).attr("data-quote");

        $("#quote").text(quote);
    });

    $(".btn-close").click(function(){
        $(this).parent().hide(); 
    });

    $(".btn-test").click(function(){
        let color = $(this).attr("data-color");
        $("#tester").css("color", color);
    });

    $(".btn-profile").mouseover(function(){
        let newSrc = $(this).attr("data-src");
        $("#profile").attr("src", newSrc);
    });

    $(".btn-profile").mouseout(function(){
        $("#profile").attr("src", "images/blank.png")
    });
});
