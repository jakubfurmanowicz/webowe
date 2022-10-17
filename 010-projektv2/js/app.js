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
    $(".btn-f1Sprint").click(function(){
        $(".piatek1").text("1 trening - 60min");
        $(".piatek2").text("Kwalifikacje");
        $(".sobota1").text("2 trening - 60min");
        $(".sobota2").text("Wyścig sprinterski 25% dystansu");
        $(".niedziela").text("Wyścig główny");
    });

    $(".btn-f1Normal").click(function(){
        $(".piatek1").text("1 trening - 60min");
        $(".piatek2").text("2 trening - 60min");
        $(".sobota1").text("3 trening - 60min");
        $(".sobota2").text("Kwalifikacje");
        $(".niedziela").text("Wyścig");
    });

    $(".btn-f2").click(function(){
        $(".piatek1").text("Trening - 45min");
        $(".piatek2").text("Kwalifikacje - 30min");
        $(".sobota1").text("Wyścig sprinterski");
        $(".niedziela").text("Wyścig główny");
    });

    $(".btn-f3").click(function(){
        $(".piatek1").text("Trening - 45min");
        $(".piatek2").text("Kwalifikacje - 30min");
        $(".sobota1").text("Wyścig sprinterski");
        $(".niedziela").text("Wyścig główny");
    });

    $(".btn-showInfo").click(function(){
        $(this).parent().next().toggle();
    });
});
