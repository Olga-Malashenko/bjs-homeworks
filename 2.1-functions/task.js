"use strict";

//   Задача 1.

let D, x1, x2;

function getSolutions( a, b, c ) {

    D = (Math.pow(b, 2)) - (4 * a * c);
    let roots = [];
    let decision = {
        D,
        roots
    }
    console.log (decision);

    if (D < 0) {
        return decision;
    }
    else if (D === 0) {
        x1 = (-b) / (2 * a);
        roots[0] = x1; 
        return decision;
    }
    else {
        x1 = ( -b + Math.sqrt(D)) / (2 * a);
        x2 = ( -b - Math.sqrt(D)) / (2 * a);
        roots[0] = x1;
        roots[1] = x2;
        return decision;
    }
}

function showSolutionsMessage(a, b, c ) {
    let result = getSolutions(a, b, c);

    console.log (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`); // или alert ??
    console.log (`Значение дискриминанта: ${D}`);

    if (D < 0) {
        console.log (`Уравнение не имеет вещественных корней`);
    }
    else if (D === 0) {
        console.log (`Уравнение имеет один корень X₁ = ${x1}`);
    }
    else {
        console.log (`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`);
    }

}

showSolutionsMessage (1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);



//  Задача  2.

function getAverageScore(data) {

    let i = 0;
    let sum = 0;
    
    for (let subject in data) {
        let marks = data[ subject ];
        data[ subject ] = getAverageMark(marks);
        sum += data[ subject ];
        i += 1;
    }

    if (data) {
        data.average =  sum / i;
    }
    else return 0; // если я правильно поняла п.5

    return data;
}

function getAverageMark(marks) {

    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}


console.log(getAverageScore({
    russian: [5, 4, 5, 4, 4, 4 ],
    english: [4, 4, 3, 5, 4 ],
    italian: [5, 5, 5, 4, 5, 5 ],
    literature: [5, 5, 4, 4, 5, 5, 4, 5, 5 ],
    dramaturgy: [4, 3, 4, 3, 4, 5 ],
    poetry: [4, 3 ]
}));

console.log(getAverageScore());

console.log(getAverageScore({
    russian: [],
    english: [],
    italian: [], 
}));


//  Задача 3*.

function getPersonData(secretData) {
    let name = getDecodedValue(secretData.aaa)
    let surname = getDecodedValue(secretData.bbb);

    return console.log({
        firstName : name,
        lastName : surname
    });
}

function getDecodedValue(secret) {
    return secret ? 'Эмильо' : 'Родриго';
}

getPersonData({aaa: 1, bbb: 0});
getPersonData({aaa: 0, bbb: 0});
getPersonData({aaa: 1, bbb: 1});
getPersonData({aaa: 0, bbb: 1});