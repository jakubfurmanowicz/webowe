$(document).ready(function(){

    let deck =
    [
        '🎃', '🎃', '👻', '👻',
        '💀', '💀','🏰', '🏰',
        '👿', '👿', '🌒', '🌒',
        '🦇', '🦇', '🦴', '🦴',
        '🔑', '🔑', '📕', '📕',
        '🏹', '🏹', '🍬', '🍬',
    ]

    $(".card").each(function(){
        let random = Math.floor(Math.random() * deck.length);

        let symbol = deck.splice(random, 1);;

        $(this).text(symbol);
    });
});