// Gdy strona załadowana to ruszamy z skryptem
$(document).ready(function(){
    $(".btn-f2Info").click(function(){
        $("#showF3Info").hide();
        $("#showF4Info").hide();
        $("#showF2Info").toggle();
        
    });

    $(".btn-f3Info").click(function(){
        $("#showF4Info").hide();
        $("#showF2Info").hide();
        $("#showF3Info").toggle();
      
    });

    $(".btn-f4Info").click(function(){
        $("#showF2Info").hide();
        $("#showF3Info").hide();
        $("#showF4Info").toggle();
    });

    // Wstęp do formatów
    $("#btn-f1").click(function(){
        $(".piatek").text("piatek");
    });
});
