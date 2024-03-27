function convert() {
    let number = document.getElementById('number').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let result = '';

    if (from === 'decimal') {
        if (to === 'binary') {
            result = parseInt(number).toString(2);
        } else if (to === 'octal') {
            result = parseInt(number).toString(8);
        } else if (to === 'hexadecimal') {
            result = parseInt(number).toString(16).toUpperCase();
        } else {
            result = number;
        }
    } else if (from === 'binary') {
        if (to === 'decimal') {
            result = parseInt(number, 2).toString(10);
        } else if (to === 'octal') {
            result = parseInt(number, 2).toString(8);
        } else if (to === 'hexadecimal') {
            result = parseInt(number, 2).toString(16).toUpperCase();
        } else {
            result = number;
        }
    } else if (from === 'octal') {
        if (to === 'decimal') {
            result = parseInt(number, 8).toString(10);
        } else if (to === 'binary') {
            result = parseInt(number, 8).toString(2);
        } else if (to === 'hexadecimal') {
            result = parseInt(number, 8).toString(16).toUpperCase();
        } else {
            result = number;
        }
    } else if (from === 'hexadecimal') {
        if (to === 'decimal') {
            result = parseInt(number, 16).toString(10);
        } else if (to === 'binary') {
            result = parseInt(number, 16).toString(2);
        } else if (to === 'octal') {
            result = parseInt(number, 16).toString(8);
        } else {
            result = number;
        }
    }

    document.getElementById('result').innerHTML = result;
}