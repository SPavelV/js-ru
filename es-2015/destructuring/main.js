"use strict";

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Пончик", "Пироженное"]
};

let { title = "Меню", size: {width, height}, items: [item1, item2]} = options;
alert(title);
alert(width);
alert(height);
alert(item1);
alert(item2);

// let options = {
//     title: "Меню"
// };
//
// let {width:w=100, height:h=200, title} = options;
//
// alert(title);
// alert(w);
// alert(h);

// let options = {
//     title: "Меню"
// };
//
// let {width=100, height=200, title} = options;
//
// alert(title);
// alert(width);
// alert(height);

// let options = {
//     title: "Меню",
//     width: 100,
//     height: 200
// };
//
// let {width: w, height: h, title} = options;
//
// alert(title);
// alert(w);
// alert(h);

// let {title, width, height} = options;
//
// alert(title);
// alert(width);
// alert(height);



// function defaultLastName() {
//     return Date.now() + '-visitor';
// }
//
// let [firstName, lastName = defaultLastName()] = ["Вася"];
//
// alert(firstName);
// alert(lastName);
// let [firstName = "Гость", lastName = "Анонимный"] = [];
// alert(firstName);
// alert(lastName);

// let [firstName, lastName] = [];
//
// alert(firstName);

// let[firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");
// alert(firstName);
// alert(lastName);
// alert(rest);

// let [, , title] = "Юлий Цезарь Император Рима".split(" ");
//
// alert(title);

// let [firstname, lastname] = ["Илья", "Кантор"];
//
// alert(firstname);
// alert(lastname);