
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
