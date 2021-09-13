//Задание 1
var x = 10;

for (var i = 2; i <= x; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue;
    }
    alert(i);
}

//Задание 2, 3
var goods = [
    {
        title: 'Товар 1',
        price: 100,
    },
    {
        title: 'Товар 2',
        price: 200,
    },
    {
        title: 'Товар 3',
        price: 300,
    }
]
var count = 0;
for (var item of goods) {
    count += item.price;
    console.log(item.title + " стоит " + item.price);
}
alert(count)

//Задание 4*

for (var i = 0; i < 10; i++);

//Задание 5*
var x = [];
var y = 0;
while (y < 20) {
    y++;
    x.push('x');
    console.log(x);
}