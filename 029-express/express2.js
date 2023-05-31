const express = require('express');
const app = express();

app.get('/:word/:count', (req, res) => {
    console.log('Request...');

    const word = req.params.word;
    const count = Number(req.params.count);

    let s = "";
    for (let i = 0; i < count; i++)
        s += word + "</br>";

    res.send(s);
});


app.listen(3333, () =>{
    console.log('Express is running');
});