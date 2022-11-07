let uncovered = 0;
let first;
let second;

$(document).ready(function () {
    let deck =
        [
            '🎃', '🎃', '👻', '👻',
            '💀', '💀', '🏰', '🏰',
            '👿', '👿', '🌒', '🌒',
            '🦇', '🦇', '🦴', '🦴',
            '🔑', '🔑', '📕', '📕',
            '🏹', '🏹', '🍬', '🍬',
        ]

    $(".symbol").each(function () {
        let random = Math.floor(Math.random() * deck.length);

        let symbol = deck.splice(random, 1);;

        $(this).text(symbol);
    });

    $(".card").click(function () {
        if (uncovered == 0) {
            $(this).addClass("uncovered");
            first = $(this).children().text();
            uncovered = 1;
        } else if (uncovered == 1) {
            if (!$(this).hasClass("uncovered")) {
                $(this).addClass("uncovered");
                second = $(this).children().text();
                uncovered = 2;

                setTimeout(function () {
                    if (first == second) {
                        $(".uncovered").addClass("destroyed");
                        uncovered = 0;
                    }
                    else {
                        $(".uncovered").removeClass("uncovered");
                        uncovered = 0;
                    }

                    if ($(".card:not(.destroyed)").length == 0) {
                        $(".result").fadeIn(500);
                    }
                }, 500);
            }
        }
    });
});