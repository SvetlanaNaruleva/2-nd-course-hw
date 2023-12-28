// // Задание 1

let i = 0;

while (i < 2) {
    console.log("Привет");
    i++;
}

// for (let i = 0; i < 2; i++) {
//     console.log("Привет");
// }


// Задание 2

// let i = 1;

// while (i <= 5) {
//     console.log(i);

//     i++;
// }
for (let a = 1; a <= 5; a++) {
    console.log(a);
  }

// Задание 3

let b = 7;

while (b <= 22) {
    console.log(b);

    b++;
}

// Задание 4

let obj = {

    "Коля": 200,
    "Вася": 300,
    "Петя": 400
};

for  (let key in obj) {
    
    alert(`${key} — зарплата  ${obj[key]} долларов`);
}

// Задание 5

let n = 1000;
let num = 0;

while (n > 50) {
    n = n / 2;
    num++;
}
console.log(n)
console.log(num)

// Задание 6

for (let firstFriday = 6; firstFriday <= 31; firstFriday += 7) { 
    console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
  
}
