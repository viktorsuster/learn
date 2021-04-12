# learn

/**
 * Take home exercises
 * ===================
 *
 * These are some exercises to practice JS foundations and a little bit of math.
 */

// Initial setup (donâ€™t change this)
// Utility function you can use to truncate numbers to 2 decimals (warning: only use for display, never for calculation)
const trunc2 = (num) => Math.trunc(num * 100) / 100;

// The object that you will be using as stock data for your functions
const STOCK_DATA = {
  AAPL: [
    { date: '2021/02/12', price: 135.37 },
    { date: '2021/02/16', price: 133.19 },
    { date: '2021/02/17', price: 130.84 },
    { date: '2021/02/18', price: 129.71 },
    { date: '2021/02/19', price: 129.87 },
    { date: '2021/02/22', price: 126.0 },
    { date: '2021/02/23', price: 125.86 },
  ],
  TSLA: [
    { date: '2021/02/12', price: 816.12 },
    { date: '2021/02/16', price: 796.22 },
    { date: '2021/02/17', price: 798.15 },
    { date: '2021/02/18', price: 787.38 },
    { date: '2021/02/19', price: 781.3 },
    { date: '2021/02/22', price: 714.5 },
    { date: '2021/02/23', price: 698.84 },
  ],
  GME: [
    { date: '2021/02/12', price: 52.4 },
    { date: '2021/02/16', price: 49.51 },
    { date: '2021/02/17', price: 45.94 },
    { date: '2021/02/18', price: 40.69 },
    { date: '2021/02/19', price: 40.59 },
    { date: '2021/02/22', price: 46.0 },
    { date: '2021/02/23', price: 44.97 },
  ],
};

// Amount of money you invest on the first day, in US dollars ($)
const MONEY_IN = 640;

// How much of your starting money you invest in each company, in percent (%)
const ALLOCATION = {
  AAPL: 20,
  TSLA: 35,
  GME: 45,
};

// Just a calendar to help to start you off, you should use or update this array
// in your exercises
const performance = [
  { date: '2021/02/12' },
  { date: '2021/02/13' },
  { date: '2021/02/14' },
  { date: '2021/02/15' },
  { date: '2021/02/16' },
  { date: '2021/02/17' },
  { date: '2021/02/18' },
  { date: '2021/02/19' },
  { date: '2021/02/20' },
  { date: '2021/02/11' },
  { date: '2021/02/22' },
  { date: '2021/02/23' },
];

/**
 * Exercise 1: Calculate daily portfolio value
 * ===========================================
 *
 * On `2021/02/12`, you decided to invest your `$640` into three stocks: Apple `AAPL`, Tesla `TSLA`, and GameStop `GME`, with allocations of 20% AAPL, 35% TSLA and 45% GME, meaning you split your money in such a ratio between the stocks. In `STOCK_DATA` youâ€™ll find the price for each ticker on each day it was traded on the stock exchange. Calculate how much money youâ€™re left with on each day between `2021/02/12` and `2021/02/23`, depending on ticker the allocation and its daily value. Think about the `2021/02/12` values as your starting price, meaning on the first day you should still end up with `640`. But since thereâ€™s no trading on holidays and weekends, the data has some missing dates. On those days your value stays the same.
 *
 * Instructions
 * ============
 *
 * Define an `updatePortfolioDailyValue` function that will update the `performance` array.
 * Update the `performance` array so that each `date` object in the array will also get a:
 *   `day` property equal to the current day starting from `1`
 *   `value` property equal to the current value of your performance for that day
 * This is how the updated array should look like:
 *   [
 *     { date: '2021/02/12', day: 1, value: 640 },
 *     { date: '2021/02/13', day: 2, value: 640 },
 *     { date: '2021/02/14', day: 3, value: 640 },
 *     { date: '2021/02/15', day: 4, value: 750 },
 *     ...
 *   ]
 *
 * Tips
 * ====
 *
 * You can also return a new array instead of updating it.
 * You will be using this array for later exercises.
 * You can define more than one function as helpers for the main function.
 */

// Change the code below this line
function updatePortfolioDailyValue() {
  return [];
}

export const dailyPortfolioValue = updatePortfolioDailyValue();

/**
 * Exercise 2: Calculate and print the return in investment
 * ========================================================
 *
 * Between the first and the last day of trading, youâ€™ve either made or lost some money. Calculate what is your return on the last day since you started investing â€“ in percent and in money.
 *
 * Instructions
 * ============
 *
 * Define an `printInvestmentReturn` function that returns a string saying whatâ€™s the current return on your investment in percent, and whatâ€™s your profit or loss.
 * The string should be in these formats:
 *   Positive return: `Current return on investment is 23.45%, a profit of $67.89.`.
 *   Negative return: `Current return on investment is -12.34%, a loss of $56.78.`.
 */

// Change the code below this line
function printInvestmentReturn() {
  return ``;
}

export const investmentReturn = printInvestmentReturn();

/**
 * Exercise 3: Calculate and print the day-to-day largest change
 * =============================================================
 *
 * Unless itâ€™s a holiday or a weekend, there should be a daily change of value on your investment. Find the day with the largest change from the previous day and calculate the difference between them.
 *
 * Instructions
 * ============
 *
 * Define an `printLargestChange` function that returns a string saying which day had the largest day-to-day change and what was the profit/loss that day.
 * The string should be in these formats:
 *   Positive change: `Largest change was on day 1, with a profit of $23.45.`
 *   Negative change: `Largest change was on day 2, with a loss of $34.56.`
 */

// Change the code below this line
function printLargestChange() {
  return ``;
}

export const largestChange = printInvestmentReturn();

/************************************************************************
Homework test
import { dailyPortfolioValue, investmentReturn, largestChange } from '.';

test('Performance array values are correct', () => {
  expect(dailyPortfolioValue).toEqual([
    { date: '2021/02/12', day: 1, value: 640 },
    { date: '2021/02/13', day: 2, value: 640 },
    { date: '2021/02/14', day: 3, value: 640 },
    { date: '2021/02/15', day: 4, value: 640 },
    { date: '2021/02/16', day: 5, value: 616.59 },
    { date: '2021/02/17', day: 6, value: 595.27 },
    { date: '2021/02/18', day: 7, value: 562.39 },
    { date: '2021/02/19', day: 8, value: 560.33 },
    { date: '2021/02/20', day: 9, value: 560.33 },
    { date: '2021/02/11', day: 10, value: 560.33 },
    { date: '2021/02/22', day: 11, value: 568.07 },
    { date: '2021/02/23', day: 12, value: 557.98 },
  ]);
});

test('Investment return string is correct', () => {
  expect(investmentReturn).toBe('Current return on investment is -12.81%, a loss of $82.01.');
});

test('Largest change is string correct', () => {
  expect(largestChange).toBe('Largest change was on day 7, with a loss of $32.87.');
});
*/