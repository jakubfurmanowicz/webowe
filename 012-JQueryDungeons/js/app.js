// KOD JQUERY DO UZUPEŁNIENIA
$(document).ready(function(){
    let result = 0;
    let haveKey = false;

    setTimeout(function(){
        $(".skeleton-hidden").addClass("skeleton");
    }, 5000);

    $(".gem").click(function(){
        if ($(this).hasClass("gem-blue"))
        {
            $(this).css("opacity", 0);
            result++;
            $("#score").text(result);
        }
        else if ($(this).hasClass("gem-green"))
        {
            $(this).css("opacity", 0);
            result+=2;
            $("#score").text(result);
        }
        else if ($(this).hasClass("gem-red"))
        {
            $(this).css("opacity", 0);
            result+=5;
            $("#score").text(result);
        }
    });

    $(".spider").click(function(){
        $(this).css("opacity", 0);
    });

    $(".bat").mouseover(function(){
        $(".bat").css("opacity", 0);
    });

    $(".key").click(function(){
        haveKey = true;
        $(".key").css("opacity", 0);
    });

    $(".chest-closed").click(function(){
        if (haveKey == true)
        {
            $(this).addClass("chest-open");
        }
    });

    $(".lever").click(function(){
        if ($(this).hasClass("lever-closed"))
        {
            $(this).removeClass("lever-closed");
            $(this).addClass("lever-open");
        } 
        else if ($(this).hasClass("lever-open"))
        {
            $(this).removeClass("lever-open");
            $(this).addClass("lever-closed");
        }
    });

    $(".ghost").mouseover(function(){
        $(this).removeClass("ghost");
        $(this).addClass("ghost-transparent");

    });

    $(".ghost").mouseout(function(){
        $(this).removeClass("ghost-transparent");
        $(this).addClass("ghost");
    }); 
});