'use strict';

function makeArmy() {
    let shooters = [];

    for(let i = 0; i < 10; i++) {
        shooters.push(function(){
            alert(i);
        });

        return shooters;
    }
}

var army = makeArmy();

army[0]();
army[5]();

// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }
//
// console.log(i);

//
// for(let i = 0; i < 10; i++){
//     console.log('for1: ' + i);
// }
//
// for(let i = 0; i < 10; i++){
//     console.log('for2: ' + i);
// }
//
// alert(i);


// alert(a);
//
// let a = 5;

// let apples = 5;
// if(true) {
//     let apples = 10;
//     alert(apples);
// }
//
// alert(apples);

// let a = 5;
// console.log(a);
