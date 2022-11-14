$(document).ready(function () {

    let x = 0;
    let i = 0;

    $(".alfa").click(function () {
        $(".epsilon").fadeToggle(300);
    });

    $(".beta").click(function () {
        if (i == 0) {
            $(".beta").text("ateB");
            i++;
        }
        else if (i == 1) {
            $(".beta").text("Beta");
            i = 0;
        }
    });

    $(".gamma").click(function () {
        $(".item").css("background-color", "salmon");
    });

    $(".zmiana").click(function () {
        $(".zdjecie").attr("src", "images/success.png");
    });

    $(".epsilon").mouseover(function () {
        x++;
        $(this).text(x);
    });

});