// Задание 1

let a
a = 10;
a = 20;
alert (a);

// Задание 2

const year = String(alert(`Год выпуска первого айфона 2007 год`));

// Задание 3

const nameJs = (alert(`Имя создателя языка JavaScript: Brendan Eich`));

// Задание 4

let ten = 10;
let two = 2;
alert (ten + two);
alert (ten * two);
alert (ten / two);
alert (ten - two);

// Задание 5
let b = 2
let c = 5
let result = (b ** c)
alert(result);


// Задание 6

let one = 9
let twoTwo = 2
let e = one % twoTwo
alert (e);

// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);


// Задание 8

let age = Number (prompt("Сколько вам лет?"));
alert (age);

// Задание 9.0

const user = {

    name:"Bob",

    age: 14,

    isAdmin: true,

};
alert(user.name)
alert(user.age)

// Задание 9.1

user["city of residence"] = `Krasnodar`;
alert(user["city of residence"]);

// Задание 9.2

user.age = 14;

alert(user.age + 14);

// Задание 9.3

delete user["city of residence"]

//Задание 9.4

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info])

// Задание 10

let yourName
yourName = prompt(`Как Вас зовут?`);
alert(`Привет, ${yourName}!`)
