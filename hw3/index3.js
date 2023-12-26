// Задание 1

let password = `лагуна`;

let enter = prompt( `Введите пароль` );

if (enter === `лагуна`) {
    alert( "Пароль введен верно" );
} else {
    alert( "Пароль введен неправильно" );
}

// Задание 2

let c = 6;

if ( c > 0 && c < 10) {
    console.log( "Верно" );
} else {
    console.log( "Неверно" );
}

// Задание 3

let d = 5;
let e = 15;

if ( d > 100 || e > 100) {
    console.log( "Верно" )
} else {
    console.log( "Не верно" )
}

// Задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
let numA = parseInt(a);
let numB = parseInt(b);

alert(numA + numB);

//Задание 5

let monthNumber = prompt('Напиши номер месяца');

switch (monthNumber) {
    case "1": // январь
        console.log( `зима` );
        break;
    case "2": // февраль
        console.log( `зима` );
        break;
    case "3": // март
        console.log( `весна` );
        break;

    case "4": // апрель
        console.log( `весна` );
        break;
    case "5":  //май
        console.log( `весна` );
        break;
    case "6":  //июнь
        console.log( `лето` );
        break; 
    case "7":  //июль
        console.log( `лето` );
        break;
    case "8":  //август
        console.log( `лето` );
        break; 
    case "9":  //сентябрь
        console.log( `осень` );
        break; 
    case "10":  //октябрь
        console.log( `осень` );
        break; 
    case "11":  //ноябрь
        console.log( `осень` );
        break; 
     case "12":  //декабрь
        console.log( `зима` );
        break; 

    default:
        console.log( `такого не существует` )
        break;
}

