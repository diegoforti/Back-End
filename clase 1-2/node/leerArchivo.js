var fs = require('fs');

const fileAsync = fs.readFile('leer.txt', function callback(err, data) {
    if (err) throw err;

    var dataSplit = data.toString().split(',');
    var resultado = 0;

    dataSplit.forEach(element => {
        resultado = resultado + parseInt(element);
    });

    const resultadoReduce = dataSplit.reduce((accum, curr) => {
        return parseInt(accum) + parseInt(curr);
    });

    console.log('resultado foreach: ', resultado);
    console.log('resultado reduce: ', resultadoReduce);
});

