ucFirst('валерия');

function ucFirst(str) {
    var firstChar = str[0],
        firstCharUppercase = firstChar.toUpperCase(),
        newString = firstCharUppercase + str.slice(1);

    console.log('First char: ' + firstChar + ', uppercase: ' + firstCharUppercase + ', new string: ' + newString);
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

function checkSpam(str) {
    upperStr = str.toUpperCase();
    var target = 'XXX',
        target2 = 'VIAGRA';

    if ((upperStr.indexOf(target) !== -1) || (upperStr.indexOf(target2) !== -1)) return true;
    return false;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);

function truncate(str, maxLength) {
    if (str.length > maxLength) {

        var newStr = str.slice(0, maxLength-3) + '...';
        console.log('Str: ' + str  + ', newStr: ' + newStr);
    } else {
        console.log('Str: ' + str);
    }
}

extractCurrencyValue('$120');

function extractCurrencyValue(str) {
    console.log(+str.slice(1));
}