let names = ['Alex', 'Bob', 'Casey', 'Danny', 'Eevee'];

const print = (data) => {
    for (let i = 0; i < data.length; i++)
        console.log(data[i]);
}

const operate = (data, fun) => {
    for (let i = 0; i < data.length; i++)
    {
        let temp = fun(data[i]);
        console.log(temp);
    }
}

print(names);

// Callback
operate(names, item => item[0]);
operate(names, item => item.length)
