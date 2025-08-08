const fibonacci = function(index) {
    let a = 0;
    let b = 1;
    let fibo = [];
    fibo.push(a);
    fibo.push(b);

    for (let i = 0; i < Number(index); i++){
        fibo.push(fibo[a] + fibo[b]);
        a++;
        b++;
    }

    if (index < 0){return "OOPS"};

    return fibo[Number(index)];
};

// Do not edit below this line
module.exports = fibonacci;
