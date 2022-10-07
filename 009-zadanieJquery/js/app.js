$(document).ready(function(){

    let i = 3;
    $("#btn-cShow").click(function(){
        $("#cInfo").toggle();
    });
    
    $("#btn-pythonShow").click(function(){
        $("#pythonInfo").toggle();
    });
    
    $("#btn-jsShow").click(function(){
        $("#jsInfo").toggle();
    });
    
    $(".btn-choose").click(function(){
    
        if($(this).hasClass("btn-primary"))
        {
            if (i <= 3 && i > 0)
            {
                $(this).removeClass("btn-primary");
                $(this).addClass("btn-danger");
                i--;
                $("#numberLeft").text("Pozostało do wyboru: " + i);
            }
        }
        else
        {
            $(this).removeClass("btn-danger");
            $(this).addClass("btn-primary");
            i++;
            $("#numberLeft").text("Pozostało do wyboru: " + i);
        }
    });

});