"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    // Это был самый первый вариант

    // let percentNumber = parseFloat(percent);  
    // let contributionNumber = parseFloat(contribution);
    // let amountNumber = parseFloat(amount);

    // Это был второй вариант

    // let parametres = [
    //     {title: 'Процентная ставка', incommingData: percent, processingData: 0}, // Пробовала ничего не присваивать ключу processingData- ругается.
    //     {title: 'Первоначальный взнос', incommingData: contribution , processingData: 0}, // Как грамотно это сделать? Пока присвоила 0 для начала.
    //     {title: 'Сумма кредита', incommingData: amount , processingData: 0}
    // ];
    // for (let i = 0; i < parametres.length; i++) {
    //     if (isNaN(parametres[i].incommingData)) {
    //         return `Параметр ${parametres[i].title} содержит неправильное значение ${parametres[i].incommingData}`;
    //     }
    //     else parametres[i].processingData = parseFloat(parametres[i].incommingData);
    // }

    // Это третий вариант

    function checkIncommingData(incommingData, title) {
        if (isNaN(incommingData)) {
            console.log('не число');
           
            return `Параметр ${title} содержит неправильное значение ${incommingData}`;
          }     
    }
    
    checkIncommingData(percent, 'Процентная ставка');
    checkIncommingData(contribution, 'Первоначальный взнос');
    checkIncommingData(amount, 'Сумма кредита');

    function changeType(incommingData) {
        return parseFloat(incommingData);
    }

    let percentNumber = changeType(percent);
    console.log('проценты ' + percentNumber);
    let contributionNumber = changeType(contribution);
    console.log('взнос ' + contributionNumber);
    let amountNumber = changeType(amount);
    console.log('сумма ' + amountNumber);

    let percentPerMonth = percentNumber / 100 / 12;

    let loan = amountNumber - contributionNumber;

    let currentDate = new Date();
    let quantityOfYear = date.getFullYear() - currentDate.getFullYear();
    let quantityOfMonth = (date.getMonth() - currentDate.getMonth()) + quantityOfYear * 12;

    let payment = loan * (percentPerMonth + percentPerMonth / (Math.pow((1 + percentPerMonth), quantityOfMonth) - 1));
    let totalAmount = (contributionNumber + payment * quantityOfMonth).toFixed(2);  //В условии задачи перечислено, что должно входить в эту сумму, в т.ч. первоначальный взнос. В проверочных данных ниже
    //очевидно, что задача решена иначе - без первоначального взноса в общей сумме. Хорошо бы Нетологии поправить в одном из двух пунктах))
    //Я сознательно включила первоначальный взнос, так мне кажется более правильным и соответствует условию.

    // console.log(typeof totalAmount);  Не понимаю, на что ругается Жасмин - тип number - что еще надо? 
    console.log(`Сумма, которую клиент заплатит банку: ${totalAmount}\nВ том числе:\n\tПервоначальный взнос ${contributionNumber}\n\tПогашение основного долга ${loan}\n\tПроценты за пользование кредитом ${(payment * quantityOfMonth - loan).toFixed(2)}`);
    return Number(totalAmount);  //Зачем здесь явное преобразование, если это и так показывало числа? Я использовала Number? но совсем не поняла, зачем?!
}


// Задача 2.

function getGreeting(name) {
    let nameForOutput = name ? name : 'Аноним'; //Вот тут не поняла, а как зщащититься от знаков препинания, смайликов и цифр вместо имени?
    let greeting = `Привет, мир! Меня зовут ${nameForOutput}`;
    return greeting;
}