"use strict";

function getResult(a,b,c){

    let d = (Math.pow(b, 2)) - (4 * a * c);

    let x = [];

    if (d === 0) {
        x[0] = ( -b) / (2 * a);
    }
    else if (d > 0) {
        x[0] = ( -b + Math.sqrt(b)) / (2 * a);
        x[1] = ( -b - Math.sqrt(b)) / (2 * a);
    }
    
    return x;
}

function getAverageMark(marks){
    let averageMark;

    if (marks.length === 0) {
        averageMark = 0;
        return averageMark;
    }
    else if (marks.length > 5) {
        console.log("Оценок слишком много. Среднее значение будет посчитано для первых пяти.");
        marks.splice(5, (marks.length - 5));
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    averageMark = sum / marks.length;

    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let age, result;

    age = new Date().getFullYear() - dateOfBirthday.getFullYear();

    result = (age >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    
    return result;
}