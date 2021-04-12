const trunc2 = (num) => Math.trunc(num * 100) / 100;

const STOCK_DATA = {
    AAPL: [
      { date: '2021/02/12', price: 135.37 },//128 //1.05757812
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

const ALLOCATION = {
    AAPL: 0.20, // 128
    TSLA: 0.35, // 224
    GME: 0.45, // 288
  };

const MONEY_IN = 640;

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
  
  function getDailyValueByCompany(company, date) {
    console.log(company, date);
    let currentCompanyStocks = STOCK_DATA[company];
    for (let entry of currentCompanyStocks) {
      // check if the dates match, then perform calculation and return it
      return 0;
    }
  }
  
  function updatePortfolioDailyValue() {
    let currentDay = 0;
    for (let entry of performance) {
      entry.day = ++currentDay;
      let AAPL_DAILY_VALUE = getDailyValueByCompany('AAPL', entry.date);
      let TSLA_DAILY_VALUE = getDailyValueByCompany('TSLA', entry.date);
      let GME_DAILY_VALUE = getDailyValueByCompany('GME', entry.date);
      entry.value = AAPL_DAILY_VALUE + AAPL_DAILY_VALUE + GME_DAILY_VALUE;
    }
    return performance;
  }
  updatePortfolioDailyValue();
  