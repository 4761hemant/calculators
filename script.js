const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentNumber = '';
            previousNumber = '';
            operation = '';
            display.value = '';
        } else if (value === '←') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (value === '=') {
            if (operation === '+') {
                display.value = parseFloat(previousNumber) + parseFloat(currentNumber);
            } else if (operation === '-') {
                display.value = parseFloat(previousNumber) - parseFloat(currentNumber);
            } else if (operation === '*') {
                display.value = parseFloat(previousNumber) * parseFloat(currentNumber);
            } else if (operation === '/') {
                display.value = parseFloat(previousNumber) / parseFloat(currentNumber);
            }
            previousNumber = '';
            operation = '';
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operation = value;
            previousNumber = currentNumber;
            currentNumber = '';
        } else {
            currentNumber += value;
            display.value = currentNumber;
        }
    });
});

