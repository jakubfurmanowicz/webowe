const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Request...');

    const word = req.query.word;
    const count = Number(req.query.count);

    let s = "";
    for (let i = 0; i < count; i++)
        s += word + "</br>";

    res.send(s);
});


app.listen(3333, () =>{
    console.log('Express is running');
});