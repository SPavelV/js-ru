var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) );
alert( getDateAgo(date, 2) );
alert( getDateAgo(date, 365) );

function getDateAgo(date, days) {
    var dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

// function getDateAgo(date, days) {
//    date.setDate(date.getDate() - days);
//    return date.getDate();
// }


// var date = new Date(2012,0,3);
//
// alert( getLocaleDay(date) );
//
// function getLocaleDay(date) {
//     var day = date.getDay();
//
//     if(day == 0) {
//         day = 7;
//     }
//
//     return day;
// }

// alert( getWeekDay(date) );
//
// function getWeekDay(date) {
//     var weekArr = ['вс', 'пн', 'вт', 'cр', 'чт', 'пт', 'cб'];
//     return weekArr[date.getDay()];
// }


// var date = new Date(2012, 1, 20, 3, 12);
// alert(date);

// С таймзоной -07:00 GMT:
// var ms = Date.parse('2012-01-26T13:51:50.417-07:00');
// alert( ms );

// var msUTC = Date.parse('2012-01-26T13:51:50.417z');
// alert(msUTC);

// var d = new Date();
// alert( d.toString() );
// alert( d.toUTCString() );
// alert( d.toISOString() );


// var date = new Date(2014, 11, 31, 12, 30, 0);
//
// var options = {
//     era: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     weekday: 'long',
//     timezone: 'UTC',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
// };
//
// alert(date.toLocaleString("ru", options) );
// alert( date.toLocaleString("en-US", options) );

// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
//
// function walkIn(arr) {
//     for (var key in arr) arr[key]++;
// }
//
// function walkLength(arr) {
//     for (var i = 0; i < arr.length; i++) arr[i]++;
// }
//
// function bench(func) {
//     for(var i = 0; i < 10000; i++) func(arr);
// }
//
// console.time("All benchmarks");
//
// console.time("walkIn");
// bench(walkIn);
// console.timeEnd("walkIn");
//
// console.time("walkLength");
// bench(walkLength);
// console.timeEnd("walkLength");
//
// console.timeEnd("All benchmarks");

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