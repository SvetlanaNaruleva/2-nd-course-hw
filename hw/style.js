
function monthNames() {
 
 let number = Number(prompt("Введите номер месяца"));

  if (number === 1 || number === 2 || number === 12) {
    return "Зима";
  } else if (number === 3 || number === 4 || number === 5) {
    return "Весна";
  } else if (number === 6 || number === 7 || number === 8) {
    return "Лето";
  } else if (number === 9 || number === 10 || number === 11) {
    return "Осень";
  } else {
    return "Введен не верный номер месяца";
  }
}


// Задание 11 _ Работа с макетом

function fruitsGame() {
  let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

  fruits = fruits.sort(() => Math.random() - 0.5);

  alert(fruits);

  let question = prompt("Чему равнялся первый элемент массива?").toLowerCase();

  let question2 = prompt("Чему равнялся последний элемент массива?").toLowerCase();

  if (fruits[0].toLowerCase() === question && fruits[fruits.length - 1].toLowerCase() === question2) {
    alert("Молодец, все верно!");
  } else if (fruits[0].toLowerCase() === question || fruits[fruits.length - 1].toLowerCase() === question2) {
    alert("Вы были блики к победе!");
  } else {
    alert("Не повезло");
  }
}


