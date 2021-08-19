'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if (typeof (a) === 'string' && typeof (a) != null &&
        typeof (b) === 'string' && typeof (b) != null &&
        a != '' && b != '' &&
        a.length <= 50 && b.length <= 50) {
        console.log("done")
        appData.expenses[a] = b;
    } else {
        alert("Введите корректные данные!")
        i--;
    }

}

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.budget < 12792) {
    console.log("Минимальный уровень достатка");    
}else if(appData.budget > 12792 && appData.budget < 50000){
    console.log("Средний уровень достатка");
}else if(appData.budget > 50000){
    console.log("Высокий уровень достатка");
}else {
    console.log("Произошла ошибка");
}