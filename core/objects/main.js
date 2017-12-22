"use strict";



var user = {
    name: 'Вася',
    age: 30
};

var clone = {};

for (var key in user) {
    clone[key] = user[key];
}

clone.name = "Петя";

alert( clone.name );

// var admin = user;
//
// admin.name = 'Петя';
// alert(user.name);


// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// multiplyNumeric(menu);
//
// function multiplyNumeric(menu) {
//     for(var key in menu) {
//         if(isNumeric(menu[key])) {
//             menu[key] = menu[key] * 2;
//         }
//     }
//
//     console.log(menu);
// }
//
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// }

// var sumSalary = 0,
//     maxSalary = 0,
//     worker = 'Нет сотрудников',
//     salaries = {
//         // "Вася" : 100,
//         // "Петя" : 300,
//         // "Даша" : 250
//     };

// for(var key in salaries) {
//     if(salaries[key] > maxSalary) {
//         maxSalary = salaries[key];
//         worker = key;
//     }
// }
//
// console.log('Максимальная зарплата: ' + worker);

// for(var key in salaries) {
//     sumSalary += salaries[key];
// }
//
//
// console.log('sumSalary: ' + sumSalary);


// function isEmpty(obj) {
//     for(var key in obj) {
//        return false;
//     }
//     return true;
// }
//
// var schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
//
// schedule["8:30"] = "подъём";
//
// alert( isEmpty(schedule) ); // false


