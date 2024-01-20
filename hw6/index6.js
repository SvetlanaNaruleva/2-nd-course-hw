// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) break;
}

// Задание 2

const numbers = [1, 5, 4, 10, 0, 3];

console.log(numbers.indexOf(4));

// Задание 3

const item = [1, 3, 5, 10, 20];

console.log(item.join(' '));

// Задание 4 исправить 

const arrA = [];
for (let i = 0; i < 3; i++) {
    let innerArr = [];
    for ( let j = 0; j <3; j++) {
        innerArr.push(1);
    }
    arrA.push(innerArr);
}

console.log(arrA);

// Задание 5

const numbs = [1, 1, 1];

let newMeaning = numbs.push(2, 2, 2);

console.log(numbs);

// Задание 6

const newArr = [9, 8, 7, 'a', 6, 5];

newArr.sort();

newArr.pop();

console.log(newArr);

// Задание 7

const array = [9, 8, 7, 6, 5];

let userGuess = prompt(`Введите число от 1 до 10`);

if (array.includes(Number(userGuess))) {
    console.log(`Угадал`);
} else {
    console.log(`Не угадал`);
};

// Задание 8

let line = 'abcdef';

line = line.split(``);
// console.log(line);
line = line.reverse();
// console.log(line);
line = line.join(``);
console.log(line);


// Задание 9  исправить

// const arr1 = [1, 2, 3,];
// const arr2 = [4, 5, 6];

// const arr3 = arr1.concat(arr2);

// console.log(arr3);

[[1, 2, 3,],[4, 5, 6]].flat()

// Задание 10

const newsArr = [5, 6, 3, 9, 2];

for (let i = 0; i < newsArr.length - 1; i++) {
    console.log(newsArr[i] + newsArr[i + 1]);
}

// задание 11 исправить

function getSquares(arr) {
    return arr.map(num => num ** num);
  }

getSquares([1, 2, 3, 4]);

// const wholeNumbers = [5, 2, 6];

// let result = wholeNumbers.map(item =>(item ** 2));

// console.log(result);

// Задание 12

function getLengthWords(getArr) {
    return getArr.map(function(word) {
      return word.length;
    });
  }
  
  console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));



// Задание 13

function filterPositive(array) {
    const arrayN = []; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) { 
            arrayN.push(array[i]) 
        }
    }
    return arrayN 

}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000]));


// Задание 14

// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода 
// Math.random()
//  в диапазоне от 0 до 10.

// В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будет два массива: исходный массив и массив с четными значениями.

// let values = [];
// let evenValues = [];

// for (let i = 0; i < 10; i++) {
//     values.push(Math.floor(Math.random() *  10) + 1);
// }

// for (let i = 0; i < values.length; i++) {
//     if (values[i] % 2 === 0) {
//         evenValues.push(values[i]);
//     }
// }

// console.log("Исходный массив:", values);
// console.log("Массив с четными значениями:", evenValues);

// Задание 15

// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
// Math.random()
//  в диапазоне от 1 до 10.

// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

// Для получения среднего арифметического необходимо все значения массива сложить и разделить на количество элементов в массиве.


// const newspaper = {
// 	sports: {
// 		title: 'ARod Hits Home Run',
// 		writers: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
// 	},
// 	business: {
// 		title: 'GE Stock Dips Again',
// 		writers: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
// 	},
// 	movies: {
// 		title: 'Superman Is A Flop',
// 		writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
// 	},
// };

// newspaper.sports.title; 
// newspaper.business.writers[0];
// newspaper['movies']['title'];


// function filterPositive(array) {
//     return array.filter(function(num) {
//     return num >= 0;
//     });
//   }
  
//   filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
//   filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

// let products = [`Стол`, `Кресло`, `Ковш`];

// console.log(products[1]);

// let products = ['Кресло', 1, 'Стол', true];

// console.log(products);

"use strict";
let age = prompt("Сколько Вам лет?", 18);

let printMessage;

// в зависимости от условия объявляем функцию
if (age < 18) {

    printMessage = function () {
        console.log("Привет!");
    }

} else {

    printMessage = function () {
        console.log("Здравствуйте!");
    }

}

printMessage();


let name = `Ира`;

function showmessage() {
    let messang = `Привет ${name}`

    console.log(messang);
}

showmessage();

// Пример стрелочной функции nfn
const multA = (a, b) => a * b;

console.log(multA(2, 3));

const puzzle = (a, b) => {
    if (a > b) {
        return a + b;
    } else {
        return a * b;
    }
}

console.log(puzzle(4, 2));

const dog = {
	name: 'Шарик',
	breed: 'корги',
	weight: 6,
	age: 2,
    bark: function() {
		console.log(`${dog.name} лает: Гав!`);
	}
}

dog.bark();

const cat = {
	name: 'Барсик',
	breed: 'перс',
	weight: 3,
	age: 4,
    bark: function() {
		console.log(`${cat.name} мяукает: Мяу!`);
	}
}
cat.bark();

const user = {
	name: 'Марина',
	age: 15,
	city: 'Балашиха',

	getInfo() {
		return `Пользователь ${user.name}, возраст ${user.age}, проживает в ${user.city}`;	
	}
};

console.log(user.getInfo());

// const dog1 = {
// 	name: 'Шарик',
// 	breed: 'корги',
// 	weight: 6,
// 	age: 2,
// 	bark() {
// 		console.log(`${this.name} лает: Гав!`);
// 	}
// }

// const dog2 = {
// 	name: 'Бобик',
// 	breed: 'шпиц',
// 	weight: 3,
// 	age: 4,
// 	bark() {
// 		console.log(`${this.name} лает: Гав!`);
// 	}
// }

// dog1.bark(); // Шарик лает: Гав!
// dog2.bark(); // Бобик лает: Гав!

// без дублирования кода

function bark() {
	console.log(`${this.name} лает: Гав!`);
};

const dog1 = {
	name: 'Шарик',
	breed: 'корги',
	weight: 6,
	age: 2,
	bark: bark,
}

const dog2 = {
	name: 'Бобик',
	breed: 'шпиц',
	weight: 3,
	age: 4,
	bark: bark,
}

dog1.bark(); // Шарик лает: Гав!
dog2.bark(); // Бобик лает: Гав!

// Практика после изучения this. Краткий экскурс

const square1 = {
    width: 2,
    height: 4,

    getRectangleArea() {
        return this.width * this.height
    },

    getRectanglePerimeter() {
        return 2 * (this.width + this.height)
    }
};

console.log(square1.getRectangleArea());
console.log(square1.getRectanglePerimeter());

const square2 = {
    width: 3,
    height: 8,

    getRectangleArea() {
        return this.width * this.height
    },

    getRectanglePerimeter() {
        return 2 * (this.width + this.height)
    }
};

console.log(square2.getRectangleArea());
console.log(square2.getRectanglePerimeter());


let num1 = prompt(`Введите первое число`);

let num2 = prompt(`Введите второе число`);

function Numbers(num1, num2) {

    return num1 < num2 ? num1 : num2;

  }
  
  console.log(Numbers(num1, num2)); 

