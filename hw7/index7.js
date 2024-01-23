// Задание 1

let str1 = `js`;

console.log(str1.toUpperCase());

// Задание 2

const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];

const condition = 'ко';

searchStart.forEach((search) => {
    
	if (search.toLowerCase().startsWith(condition.toLowerCase())) {
		console.log(search);
	}
});


const searchStart1 = ['яблоко', 'груша', 'гриб', 'огурец'];

const condition1 = `гру`;

searchStart1.forEach((search1) => {
    if (search1.toLowerCase().startsWith(condition1.toLowerCase())) {
        console.log(search1);
    }
});


const searchStart2 = ['Дом', 'Банк', 'Больница', 'Театр'];

const condition2 = `Кино`;

searchStart1.forEach((search2) => {
    if (search2.toLowerCase().startsWith(condition2.toLowerCase())) {
        console.log(search2);
    }
});

// Задание 3

// До меньшего целого
Math.floor(32.58884);

// До большего целого
Math.ceil(32.58884);

// До ближайшего целого
Math.round(32.58884);

// задание 4

let numbers = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...numbers));

console.log(Math.max(...numbers));

// Задание 5 исправить 

// function getRandom(max) {
//     return Math.floor(Math.random() * max);
//   }
  
//   console.log(getRandom(10));

function getRandom(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}
console.log(getRandom(1, 10));

  // Задание 6 исправить 

function getRandomArrNumbers(value) {
    const getRandom = [];
    for (let i = 0; i < value / 2; i++) {
        getRandom[i] = Math.floor(Math.random() * value);
    }
    return getRandom;       
    }

    console.log(getRandomArrNumbers(7));
    console.log(getRandomArrNumbers(12));

  // Задание 7

  function getRandom (min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  console.log(getRandom(2, 9));
  

  // Задание 8

  let currenDate = new Date;

  console.log(currenDate);

//   let currentDate1 = new Date;

//   let ruCurrentDate1 = currentDate.toLocaleDateString(`ru-RU`);

//   console.log(ruCurrentDate1);

  // Задание 9

  let currentDate = new Date;

  let futurreDare = new Date;

  futurreDare.setDate(currentDate.getDate() + 73);

  console.log(futurreDare);

  // Задание 10

  const day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  
  function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    let formattedDate = `Дата: ${day} ${months[month - 1]} ${year}.`;
    let formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
  
    return {
      date: formattedDate,
      time: formattedTime
    };
  }
  
  let newDate = new Date();
  
  let { date, time } = formatDate(newDate);
  
  console.log(date);
  console.log(time);
  


// const currentDate = new Date();
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// currentDate.toLocaleDateString('ru-RU', options);


// let currentDate = new Date();

// currentDate.toLocaleTimeString('ru-RU')

function gameArr() {
    let fruits = ['Яблоко' , 'Груша' , 'Дыня' , 'Виноград' , 'Персик' , 'Апельсин' , 'Мандарин'];
  
    fruits = fruits.sort(() => Math.random() - 0.5);
  
    alert(fruits);
  
    let question;
    let question2;
  
    do {
      question = prompt("Чему равнялся первый элемент массива?").toLowerCase();
    } while (!question || question !== fruits[0]);
  
    do {
      question2 = prompt("Чему равнялся последний элемент массива?").toLowerCase();
    } while (!question2 || question2 !== fruits[fruits.length - 1]);
  
    if (fruits[0] === question && fruits[fruits.length - 1] === question2) {
      alert("Молодец, все верно!");
    } else if (fruits[0] === question || fruits[fruits.length - 1] === question2) {
      alert("Вы были близки к победе!");
    } else {
      alert("Не угадал!");
    }
  }
  