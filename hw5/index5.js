// Задание 1

let a = prompt(`Введите первое число`);

let b = prompt(`Введите второе число`);

function Numbers(a, b) {

    return a < b ? a : b;

  }
  
  console.log(Numbers(a, b)); 


  // Задание 2

  function isEvenOrOdd(number) {

    return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
  }
  
  console.log(isEvenOrOdd(9));
  console.log(isEvenOrOdd(6)); 

// Задание 3

function squareOfTheNumber(inputNumber) {
  console.log(inputNumber ** 2);
}

squareOfTheNumber(8);

function returnSquareOfTheNumber(inputNumber) {
  return inputNumber ** 2;
}

// returnSquareOfTheNumber(8);

let result = returnSquareOfTheNumber(8);

console.log(result);

// Задание 4

function sayHello() {
  const age = prompt(`Сколько Вам лет?`);
  if (age < 0) {
    console.log(`Вы ввели неправильное значение`);
    return
  } if (age <= 12) {
    console.log(`Привет друг!`);
  } else {
    console.log(`Добро пожаловать!`);
  }
}

sayHello();


// Задание 5

function isNumber(a, b) {
  
  if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом'
  } 
    return a * b 
}

console.log(isNumber(``, `нет`));

console.log(isNumber(4, 5));

// Задание 6

function cube() {
  let qwerty = prompt(`Введите число`);
  if (isNaN(qwerty)) {
    return `Переданный параметр не является числом`;
  } else {
    return `n в кубе равняется ${qwerty ** 3}`
  }
}
cube();

// Задание 7


let circle1 = { radius: 5, getArea, getPerimeter }; 
let circle2 = { radius: 8, getArea, getPerimeter };

function getArea() {
  return Math.PI * this.radius ** 2
}

function getPerimeter() {
  return 2 * Math.PI * this.radius
}

console.log(circle1.getArea());

console.log(circle1.getPerimeter());


console.log(circle2.getArea());

console.log(circle2.getPerimeter());

// Практика 

// function addition(a,b) {
//   return a + b
// }

// console.log(addition(2,3));


// function sum(c, e) {
//   return c * e
// }

// console.log(sum(8, 2));


// function average(d, k) {
//   return (d + k) / 2
// }

// console.log(average(2,3));

// function multiply(o, f) {
//   return o * f
// }

// console.log(multiply(2, 3));


// function sqrt(a) {
//   return Math.sqrt(a);
// }

// console.log(sqrt(25));

// function gcd(a, b) {
//   let temp = b % a;
//   while (temp !== 0) {
//     a = b;
//     b = temp;
//     temp = b % a;
//   }
//   return a;
// }

// console.log(gcd(10, 15));

// let a = Number(prompt(`Введите первое число`));
// let b = Number(prompt(`Введите второе число`));

// if (a > b) {
//     console.log(`Первое число больше`);
// } else if (a === b) {
//     console.log(`Числа равны`);
// } else if (a < b) {
//     console.log(`Второе число больше`);
// } else {
//     console.log(`Ты ввел какую-то белеберду`);
// }

// let a = Number(prompt(`Введите первое число`));
// let b = Number(prompt(`Введите второе число`));

// let max = a;
// if (max < b) {
//     max = b;
// }

// console.log(`Максимальное число ${max}`);


// let answer = String(prompt(`Зимой и летом одним цветом`));

// answer = answer.toLocaleLowerCase();

// if (answer === `елка` || answer === `ёлка` || answer === `ель`) {
//     console.log(`Молодец угадал`);
// } else {
//     console.log(`Подумай еще`);
// }

// let time = String(prompt(`Сколько время`))

// if (time >= 40 && time <= 60) {
//     console.log(`Можешь идти`);
// } else {
//     console.log(`Не удачное время`);
// }

// (time >= 40 && time <= 60) ? console.log("Можешь идти") : console.log("Не удачное время");


// Задание 7 (2.3)
// let num = prompt(`Пожалуйста, введите любое число`);

// if (isNaN(num)) {
//     console.log(`Введенное значение не является числом`);
// } else if (num % 2 === 0) {
//     alert(`Число четное`);
// } else {
//     alert(`Число не четное`);
// }

// let clientOS = 0 || 1;

// if (clientOS === 0) {
//     console.log(`Установите версию приложения для Android по ссылке`);
// } else {
//     console.log(`Установите версию приложения для iOS по ссылке`);
// }

// let clientDeviceYear = 2015;

// if ((clientOS === 0) && (clientDeviceYear >= 2015)) {
//     alert(`Установите версию приложения для iOS по ссылке`)
// } else if ((clientOS === 0) && (clientDeviceYear < 2015)) {
//     alert(`Установите облегченную версию приложения для iOS по ссылке`)
// } else if ((clientOS === 1) && (clientDeviceYear >= 2015)) {
//     alert(`Установите версию приложения для Android по ссылке`)
// } else if ((clientOS === 1) && (clientDeviceYear < 2015)) {
//     alert(`Установите облегченную версию приложения для Android по ссылке`)
// }

// let i = 1;

// let n = Number(prompt(`Сколько раз Вам сказать привет?`));

// while (i <= n) {
//     alert(`Привет!`);
//     i++;
// }

// let number;

// do {
//     number = Number(prompt(`Введите число 5 для проверки`))
// } while (number !== 5);

// while(true) { // запускаем бесконечный цикл,
//     // т.к. не знаем точной итерации на которой нужно будет выйти из цикла
//         const msg = prompt('Введите ваше сообщение'); // в переменную msg записываем
//         // сообщение введенное пользователем
//         console.log(msg); // выводим сообщение пользователя
//         if (msg === 'end') { // проверяем, сообщение введенное пользователем равно end
//             break; // если равно, то выходим из цикла
//         }
//     }


//     let i = 0; // задаем начальное значение счетчика
// let sum = 0; // объявляем переменную, в которой будем хранить сумму
// while(i < 10) { // проверяем, что счетчик меньше 10
// 	i++; // увеличиваем счётчик на 1
// 	if (i % 4 === 0) { // проверяем, что счётчик кратен 4
// 		continue; // если кратен, то код ниже выполнен не будет
// 	}
// 	sum += i; // увеличиваем сумму на текущий счётчик,
// 	// если i будет кратно 4, эта строка не выполится
// }

// console.log(sum); // 43


// while(true) { // бесконечный цик
// 	const msg = prompt('Введите сообщение'); // сообщение от пользователя
// 	if (msg === 'continue') { // если continue
// 		continue; // код ниже не выполнится, переходим к следующему шагу цикла
// 	}
// 	console.log(msg); // выводим сообщение пользователя
// 	if (msg === 'break') { // если break
// 		break; // прекращвем выполнение цикла
// 	}
// }
// let monthNumber = 1;

// while (monthNumber <= 12) {
//     if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
//         console.log('Зима');
//     } else if (monthNumber >= 3 && monthNumber <= 5) {
//         console.log('Весна');
//     } else if (monthNumber >= 6 && monthNumber <= 8) {
//         console.log('Лето');
//     } else if (monthNumber >= 9 && monthNumber <= 11) {
//         console.log('Осень');
//     }
// 	monthNumber++; // Увеличиваем значение monthNumber для следующего шага на 1
// }

// for (let monthNumber = 1; monthNumber <= 12; monthNumber++) {
//   if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
//       console.log('Зима');
//   } else if (monthNumber >= 3 && monthNumber <= 5) {
//       console.log('Весна');
//   } else if (monthNumber >= 6 && monthNumber <= 8) {
//       console.log('Лето');
//   } else if (monthNumber >= 9 && monthNumber <= 11) {
//       console.log('Осень');
//   }
// }

// let n = 7;
// let string = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k <(n-i) * 2-1; k++) {
//     string += "♥";
//   }
//   string += "\n";
// }

// console.log(`${string}`);

// function riddle (question, answer) {
//   let userAnswer =prompt(question);
//   if (userAnswer === answer) {
//     console.log(`не угадал`);
//   } else {
//     console.log(`угадал`);
//   }
// }

// riddle (`Сидит дед во сто шуб одет`, `лук`);

// riddle (`Зимой и летом одним цветом`, `елка`);

// const user = {
//     name: 'Коля',
//     age: 45,
//     city: 'Москва',
//     getInfo: function() {
//         return `Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`
//     }
// }

// console.log(user.getInfo())


// const square1 = {
//     width: 3,
//     height: 7,
//     getRectangleArea() {
//         return this.width * this.height;
//     },
//     getRectanglePerimeter() {
//         return this.width * 2 + this.height * 2;
//     } 
// };

// const square2 = {
//     width: 4,
//     height: 9,
//     getRectangleArea() {
//         return this.width * this.height;
//     },
//     getRectanglePerimeter() {
//         return this.width * 2 + this.height * 2;
//     } 
// };

// console.log(square1.getRectangleArea());
// console.log(square1.getRectanglePerimeter());
// console.log(square2.getRectangleArea());
// console.log(square2.getRectanglePerimeter());

// function checkAge(age) {
//   return (age > 18) ?true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }