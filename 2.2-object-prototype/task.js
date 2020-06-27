String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome() = function() {
// убрать пробелы
let phrase = this.toLowerCase()   // привести в один регистр   
let str = phrase.toString()   // сделать из строки массив   
function replacer(this, aa) {
    
}
let strVersa = str.replace(this, replacer)  // перевернуть  
// сравнить поочередно или два массива?

    return (str === strVersa);
}



// Задача 2.

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let roundedAverage = Math.round(sum / marks.length);
    return roundedAverage;
}


// Задача 3.

function checkBirthday(birthday) {
    let now = new Date();
    let dateOfBirthday = new Date(birthday);
    let diff = now.getTime() - dateOfBirthday.getTime();
    let age = diff / 1000 / 60 / 60 / 24 / 356.25;

    verdict = (age >= 18);
    return verdict;
}
