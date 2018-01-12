"use strict";

// Можно использовать и более сложную деструктуризацию, с соответствиями и значениями по умолчанию:
let options = {
    title: "Menu"
};

function showMenu({title="Заголовок", width:w=100, height:h=200}) {
    alert(title + ' ' + w + ' ' + h);
}

showMenu(options);
// Деструктуризация в параметрах
// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };
//
// function showMenu({title, width, height}) {
//     alert(title + ' ' + width + ' ' + height);
// }
//
// showMenu(options);


// let numbers = [2, 3, 15];
//
// let max = Math.max(...numbers);
//
// alert( max );

// Оператор spread вместо arguments
// function showName(firstName, lastName, ...rest) {
//     alert(firstName + ' ' + lastName + ' - ' + rest);
// }
//
// showName("Юлий", "Цезарь", "Император", "Рима");


// Параметры по умолчанию могут быть не только значениями, но и выражениями.
// function sayHi(who = getCurrentUser().toUpperCase()) {
//     alert('Привет, ' + who);
// }
//
// function getCurrentUser() {
//     return 'Вася';
// }
//
// sayHi();

// Параметры по умолчанию
// function showMenu(title = "Заголовок", width = 100, height = 200) {
//     alert('title=' + title + ' width=' + width + ' height=' + height);
// }
//
// showMenu(undefined, null);

// function showMenu(title = "Без загаловка", width = 100, height = 200)  {
//     alert('title=' + title + ' width=' + width + ' height=' + height);
// }
//
// showMenu("Menu");