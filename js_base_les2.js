//Задание 1.
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - "++a" это a+1 
d = b++; alert(d);           // 1 - "b++" в следующем действии b+1
c = (2 + ++a); alert(c);     // 5 - было дано a=1, в след строчке ++a,значит a=2;в этой строчке еще ++a значит a стало a=3 - 2+3=5
d = (2 + b++); alert(d);     // 4 - было дано b=1; затем "d=b++" к этой строчке b=2
alert(a);                    // 3 - было дано a=1, в след строчке ++a,значит a=2;в этой строчке еще ++a значит a стало a=3
alert(b);                    // 3 - было дано b=1; затем "d=b++" к следующей строчке b=2, но указано снова "b++", значит к выводу b= еще + 1, а значит 3

//Задание 2.
var a = 2;
var x = 1 + (a *= 2);
alert(a);                    // 4
alert(x);                    // 5

//Задание 3.
var a = 2;
var b = 1;
if (a > 0 && b > 0) {
    x = a - b;
    alert(x);
}
else if (a < 0 && b < 0) {
    x = a * b;
    alert(x);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
    x = a + b;
    alert(x);
}

//Задание 4.

var a = +prompt('Введите число от 1 до 15');
switch (a) {
    case 1:
        alert('Ваше число 1');
        break;
    case 2:
        alert('Ваше число 2');
        break;
    case 3:
        alert('Ваше число 3');
        break;
    case 4:
        alert('Ваше число 4');
        break;
    case 5:
        alert('Ваше число 5');
        break;
    case 6:
        alert('Ваше число 6');
        break;
    case 7:
        alert('Ваше число 7');
        break;
    case 8:
        alert('Ваше число 8');
        break;
    case 9:
        alert('Ваше число 9');
        break;
    case 10:
        alert('Ваше число 10');
        break;
    case 11:
        alert('Ваше число 11');
        break;
    case 12:
        alert('Ваше число 12');
        break;
    case 13:
        alert('Ваше число 13');
        break;
    case 14:
        alert('Ваше число 14');
        break;
    case 15:
        alert('Ваше число 15');
        break;
}

//Задание 5.

var a = 2;
var b = 3;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a + b;
}

//Задание 6.
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
    }
}

// Задание 7*.
null > 0; // false
null == 0; // false
null >= 0; // true