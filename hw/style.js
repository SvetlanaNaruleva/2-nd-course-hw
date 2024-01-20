
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

function gameStart() {
  let arrStart = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

  arrStart = arrStart.sort(() => Math.random() - 0.5);

  // arrStart.sort(function (a, b) {
  //   return a.toLowerCase().startsWith(b.toLowerCase() - 1)
  // });

  alert(arrStart);

  let question = prompt("Чему равнялся первый элемент массива?").toLowerCase();

  let question2 = prompt("Чему равнялся последний элемент массива?").toLowerCase();

  if (arrStart[0] === question && arrStart[-1] === question2) {

    alert(`Молодец, все верно!`);

  } else if (arrStart[0] === question || arrStart[-1] === question2) {

    alert(`Вы были близки к победе!`);

  } else {

    alert(`не повезло`);

  }
} 


