'use strict'
// 10.04.2020
let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.getElementsByClassName('optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

function start() {
    money = +prompt("Ваш бютжет за міцсяць?", '');
    time = prompt("ВВедіть дату!", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бютжет за міцсяць?", '');
    }
}
start();



let appData = {
    budget: money,
    expenses: {},
    optioanalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {

            let a = prompt("Введіть обовязкову статтю розходів в цьому місяці", '');
            b = prompt("Яка сума?", '');

            if ((typeof (a)) == 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Щоденний бютжет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("мін рівень достатку");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Середний рівень достатку");
        } else if (appData.moneyPerDay) {
            console.log("Високий рівень достатку");
        } else {
            console.log("Виникла помилка");
        }
    },
    chekSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Введіть суму ваших збережень!", '');
            let percent = +prompt("Під який відсоток?", '');

            appData.moneyIncome = save / 100 / 12 * percent;
            alert("Відсоток ваших збережень в місяць становить: " + appData.moneyIncome);
        }
    },

    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let qustionoptEx = +prompt("Стаття необовязкових розходів?", '');
            appData.optioanalExpenses[i] = qustionoptEx;
            console.log(appData.optioanalExpenses);
        }
    },

    chooseIncome: function () {
        let items = prompt('Що принесе додатковий дохід?(Перерахуйте через кому!)', '');
        if (typeof (items) != 'string' || items == '' || typeof (items) == null) {
            console.log('Ви ввели некоретні дані або не ввели нічого!');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Ви нічого не забули добавити?', ''));
            appData.income.sort();
        }

        appData.income.forEach(function (itemsmassive, i) {
            alert('Спосіб додаткового заробітку: ' + (i + 1) + itemsmassive);
        });

    },


};
// Всі дані програми
for (let key in appData) {
    console.log('Наша програма включає в себе такі дані: ' + key + ' - ' + appData[key]);
}