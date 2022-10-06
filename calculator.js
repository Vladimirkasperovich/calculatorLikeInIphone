let a = ''; //first number
let b = ''; //second number
let sign = ''; //знак операции
let finish = false;


const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%'];


//экран
const out = document.querySelector('.calc-screen p');



//function
function clearAll() {
    a = ''; //first number and result 
    b = ''; //second number
    sign = ''; // знак
    finish = false;
    out.textContent = 0;
}

//по нажатию на кнопку ac очищаем поле ввода
let ac = document.querySelector('.ac');
ac.addEventListener('click', function () {
    clearAll();
});

//нажатие на кнопку
let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function (event) {
    //нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    //нажата кнопка ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    //получаю нажатую кнопку
    const key = event.target.textContent;

    //если нажата 0-9 или точка
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;

            out.textContent = a;
        }
        else if (!a == '' && !b == '' && finish) {
            b = key;
            finish = false;
            out.innerHTML = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    //если нажата + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //нажата равно
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'ERROR';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case '%':
                a = a / 100 * b
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }


});
