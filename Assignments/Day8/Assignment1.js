function isEvenOrOdd(number, callback) {
    if(number % 2 == 0) callback("Even");
    else callback("Odd")
}

function logNumber(inputString) {
    console.log(inputString);
}

isEvenOrOdd(5, logNumber);