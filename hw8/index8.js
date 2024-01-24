// задания для практики

const fibonacci = [1, 1, 2, 3, 5, 8];

// TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
const multipleByTwoFib = fibonacci.map((a) => a * 2);
// Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
const plusTenFib = fibonacci.map((b) => b + 10);
// Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
const onlyBigFib = fibonacci.filter((c) => c > 3);

console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
console.log(onlyBigFib); // => [5, 8]

// Практика - Задача 1

// Дана функция callbackWithArrayLength, первым аргументом она принимает массив, а вторым — колбэк.
// Код функции не дописан, и она всегда вызывает callback с числом −1, а должна вызывать колбэк с длиной переданного первым аргументом массива.
// Скопируйте этот код в консоль браузера и допишите тело функции так, чтобы код ниже вывел в консоль 1 2 5. Сейчас он выводит 
// -1 -1 -1

function callbackWithArrayLength(arr, callback) {
    // console.log(arr);
    /* Писать код тут */
    callback(arr.length);
  }
  
  callbackWithArrayLength([1], (length) => {
    console.log(length);
  });
  
  callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
  });
  callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);
  });

  // Практика - Задача 2

//   Колбэк может быть вызван внутри функции несколько раз. Исправьте код функции each, чтобы в консоль выводились не индексы элементов в массиве, а сами элементы массива. То есть «Глеб», «Олег» и так далее.

function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// Практика 

const timer = (deadline) => {
    if (isNaN(+deadline)) { // + − приводим значение к number, если это NaN,
        console.log('Передано некорректное число'); // выводим сообщение
        return; // выходим из функции
    }

    let time = deadline;
    const interval = setInterval(() => {
        time -= 1;
        console.log(time);
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Время истекло!')
    }, deadline * 1000)
};

const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
timer(deadline);

// Домашка

// Задание 1

// С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }

    return 0;
  });

  console.log(people);

  // Допишите колбэк для sort, изучите, как работает колбэк, в документации
  console.log(people.sort((a, b) => a.age - b.age));
 
 // код выше должен вывеcти =>
 // [
 //  { name: 'Олег', age: 7 },
 //  { name: 'Анна', age: 17 },
 //  { name: 'Глеб', age: 29 },
 //  { name: 'Оксана', age: 47 }
 // ]

 // Задание 2

//  Реализуйте функцию filter, которая должна работать аналогично методу массива 
// `filter. За основу возьмите функцию map, которую мы реализовывали на уроке.
// Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова 
// ruleFunction, принимать решение о том, добавлять в результирующий массив очередной элемент или нет. Возьмите за основу код ниже. Задание считается выполненным, если два console.log в коде выводят правильное значение:

function isPositive(a) {
  return a > 0;
}

function isMale(name, gender) { 

    if (gender === 'male') {
    
     return name + gender; 
    
    } 
}

function filter(array, ruleFunction) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (ruleFunction(array[i])) {
      output.push(array[i]);
    }  
  }

  return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Выводит [3, 1, 9]

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); // Выводит [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


// Задание 3

// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».


const timer = () => {
    let currentDate = Date();
    console.log(currentDate);

    let timerId;

    if (timerId) {
        clearInterval(timerId);
    }

    timerId = setInterval(() => {
        let currentDate = Date();
        console.log(currentDate);
    }, 3000);

    setTimeout(() => {
        clearInterval(timerId);
        console.log('30 секунд прошло');
    }, 30000);
};

timer();

// Задание 4

// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
// Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.


function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000);
//   callback();
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

// Задание 5

// Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:
// Привет, Глеб!
// Прошла одна секунда
// Правильный порядок:

// Прошла одна секунда
// Привет, Глеб!
//Исправьте код, чтобы он выводил сообщения в правильном порядке:


// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(function() {
    sayHi('Глеб')
});
