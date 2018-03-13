'use strict';

var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var FirstandPike = {
  minCust: 23,
  maxCust: 65,
  avgCkSale: 6.3,
  cookieNums:[],
  totalCookies: 0,
  dailySales: function () {
    var min = this.minCust;
    var max = this.maxCust;
    
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      this.cookieNums[i] = cookieNum;

      this.totalCookies = this.totalCookies + cookieNum;
    }
  }
};

var Seatac = {
  minCust: 3,
  maxCust: 24,
  avgCkSale: 1.2,
  cookieNums:[],
  totalCookies: 0,
  dailySales: function () {
    var min = this.minCust;
    var max = this.maxCust;
    
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      this.cookieNums[i] = cookieNum;

      this.totalCookies = this.totalCookies + cookieNum;
    }
  }
};

var SeattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCkSale: 3.7,
  cookieNums:[],
  totalCookies: 0,
  dailySales: function () {
    var min = this.minCust;
    var max = this.maxCust;
    
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      this.cookieNums[i] = cookieNum;

      this.totalCookies = this.totalCookies + cookieNum;
    }
  }
};


var CapHill = {
  minCust: 20,
  maxCust: 38,
  avgCkSale: 2.3,
  cookieNums:[],
  totalCookies: 0,
  dailySales: function () {
    var min = this.minCust;
    var max = this.maxCust;
    
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      this.cookieNums[i] = cookieNum;

      this.totalCookies = this.totalCookies + cookieNum;
    }
  }
};

var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCkSale: 4.6,
  cookieNums:[],
  totalCookies: 0,
  dailySales: function () {
    var min = this.minCust;
    var max = this.maxCust;
    
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      this.cookieNums[i] = cookieNum;

      this.totalCookies = this.totalCookies + cookieNum;
    }
  }
};








