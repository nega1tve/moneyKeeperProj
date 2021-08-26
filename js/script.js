'use strict';
let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesValue = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelectorAll('.choose-income'),
    checkSavings = document.querySelectorAll('#savings'),
    sumValue = document.querySelectorAll('.choose-sum'),
    percentValue = document.querySelectorAll('.choose-percent'),
    yearValue = document.querySelectorAll('.year-value'),
    monthValue = document.querySelectorAll('.month-value'),
    dayValue = document.querySelectorAll('.day-value');


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет " + moneyPerDay);
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');

            if (typeof (a) === 'string' && typeof (a) != null &&
                typeof (b) === 'string' && typeof (b) != null &&
                a != '' && b != '' &&
                a.length <= 50 && b.length <= 50) {
                console.log("done")
                appData.optionalExpenses[a] = b;
            } else {
                alert("Введите корректные данные!")
                i--;
            }
        }
    },
    detectDayBudget: function () {
        return appData.moneyPerDay = (appData.budget / 30).toFixed();
    },
    detectLevel: function () {
        if (appData.budget < 12792) {
            console.log("Минимальный уровень достатка");
        } else if (appData.budget > 12792 && appData.budget < 50000) {
            console.log("Средний уровень достатка");
        } else if (appData.budget > 50000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        let items = prompt(`Что принесет дополнительный доход? (Перечислите через запятую)`, '');
        if (typeof(items) == "string" && items == null && items == '') {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может быть что-то ещё? ",''));
            appData.income.sort;
        }
    }
};
