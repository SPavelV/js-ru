var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (var key in arr) arr[key]++;
}

function walkLength(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(func) {
    for(var i = 0; i < 10000; i++) func(arr);
}

console.time("All benchmarks");

console.time("walkIn");
bench(walkIn);
console.timeEnd("walkIn");

console




// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
//
// function walkIn(arr) {
//     for(var key in arr) arr[key]++;
// }
//
// function walkLength(arr) {
//     for(var i = 0; i < arr.length; i++) arr[i]++;
// }
//
// function bench(func) {
//     var date = new Date();
//     for (var i = 0; i < 1000; i++) func(arr);
//     return new Date() - date;
// }
//
// var timeIn = 0,
//     timeLength = 0;
// for( var i = 0; i < 100; i++ ) {
//     timeIn += bench(walkIn);
//     timeLength += bench(walkLength);
// }
//
// alert('Время walkin: ' + timeIn + 'mc');
// alert('Время walkLength: ' + timeLength + 'mc');

// var start = new Date;
//
// for (var i = 0; i < 100000; i++) {
//     var doSomething = i * i * i;
// }
//
// var end = new Date;
//
// alert("Цикл занял " + (end - start) + " ms");

// alert(+new Date);

// var d = new Date;
// d.setDate(1);
// alert(d);
//
// d.setDate(0);
// alert( d );

// var d = new Date();
// d.setSeconds(d.getSeconds() + 70);
// alert(d);

// var d = new Date(2013, 1, 28);
// d.setDate(d.getDate() + 2);
//
// alert(d);

// var b = new Date(2013, 0, 32);
// alert(b);

// var today = new Date;
// today.setHours(0);
// alert(today);
//
// today.setHours(0, 0, 0, 0);
// alert(today);


// alert( new Date().getTimezoneOffset() );

// var date = new Date();
//
// alert( date.getHours() );
//
// alert( date.getUTCHours() );

// var now = new Date();
// alert(now);