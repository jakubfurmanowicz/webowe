const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('ok');

    const dlugosc = Number(req.query.dlugosc);
    const min = Number(req.query.min);
    const max = Number(req.query.max);

    const hiragana = [ 
    'あ', 'い', 'う', 'え', 'お','か', 'き', 
    'く', 'け', 'こ','さ', 'し', 'す', 'せ', 
    'そ','た', 'ち', 'つ', 'て', 'と', 'な', 
    'に', 'ぬ', 'ね', 'の','は', 'ひ', 'ふ', 
    'へ', 'ほ','ま', 'み', 'む', 'め', 'も',
    'や', 'ゆ', 'よ','ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'ゐ', 'ゑ', 'を', 'ん',
    'が', 'ぎ', 'ぐ', 'げ', 'ご',
    'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
    'だ', 'ぢ', 'づ', 'で', 'ど',
    'ば', 'び', 'ぶ', 'べ', 'ぼ',
    'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
    'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ'];

    let s = "";
    
    
    for (let i = 0; i < dlugosc; i++)
    {
        random = Math.floor(Math.random() * (max - min + 1)) + min;

        for (let j = 0; j < random; j++)
        {
            random2 = Math.floor(Math.random() * hiragana.length);
            s += hiragana[random2];
        }
        s += "<br>";
    }

    res.send(s);

});

app.listen(3333, () => {
    console.log('express is working');
});