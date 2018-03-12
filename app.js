'use strict';

var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var FirstandPike = {
  minCust: 23,
  maxCust: 65,
  AvgCkSale: 6.3,
  dailySales: function (min, max) {
    var cookieNums = [];
    min = this.minCust;
    max = this.maxCust;
    
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      cookieNums.push(cookieNum);
    }
    
    return cookieNums;
  }
};

var Seatac = {
  minCust: 3,
  maxCust: 24,
  AvgCkSale: 1.2,
  dailySales: function (min, max) {
    var cookieNums = [];
    min = this.minCust;
    max = this.maxCust;
    
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      cookieNums.push(cookieNum);
    }
    
    return cookieNums;
  }
};

var SeattleCenter = {
  minCust: 11,
  maxCust: 38,
  AvgCkSale: 3.7,
  dailySales: function (min, max) {
    var cookieNums = [];
    min = this.minCust;
    max = this.maxCust;
    
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      cookieNums.push(cookieNum);
    }
    
    return cookieNums;
  }
};


var CapHill = {
  minCust: 20,
  maxCust: 38,
  AvgCkSale: 2.3,
  dailySales: function (min, max) {
    var cookieNums = [];
    min = this.minCust;
    max = this.maxCust;
    
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      cookieNums.push(cookieNum);
    }
    
    return cookieNums;
  }
};

var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCkSale: 4.6,
  dailySales: function (min, max) {
    var cookieNums = [];
    min = this.minCust;
    max = this.maxCust;
    
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      cookieNums.push(cookieNum);
    }
    
    return cookieNums;
  }
};








