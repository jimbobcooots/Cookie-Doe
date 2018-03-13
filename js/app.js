'use strict';

var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var cookieSalesArray = [];
var salesTotal = 0;

var table = document.getElementById('sales-table');

function cookieShop(location, minCust, maxCust, avgCkSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCkSale = avgCkSale;
  cookieSalesArray.push(this);
}

cookieShop.prototype.render = function () {
  //we want our function to push sales at each hour into our cookieSalesArray
  var min = this.minCust;
  var max = this.maxCust;
  
  var trElement = document.createElement('tr');
  var trLocation = document.createElement('td');
  trLocation.textContent = this.location;
  trElement.appendChild(trLocation);
 
  //creating the table row that we will input our location and sales data at each hour

  for (var i = 0; i < hour.length; i++) {
    var randomCustNum = Math.floor(Math.random() * (max - min + 1) + min);
    
    //for loop is iterating through the hours array, and at each index returning a random integer

    var avg = this.avgCkSale;
    
    var cookieNum = Math.round(randomCustNum*avg);
    // console.log(cookieNum);
    cookieSalesArray.push(cookieNum);
    //we are pushing a value into our global var which = cookieSalesArray
   
    var rowElement = document.createElement('td');
    rowElement.textContent = cookieNum;
    trElement.appendChild(rowElement);
    //we want to append the cookieNum (rand number) <td> to the trElement
  }

    table.appendChild(trElement);
}

var Alki = new cookieShop('Alki', 20, 40, 2);
console.log(Alki);

function makeHoursHeader() {
  var locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  table.appendChild(locationHeader);
  
  for (var i = 0; i < hour.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = hour[i];
    table.appendChild(thElement);
  }
}

makeHoursHeader();

Alki.render();


/*function (minCust, maxCust, avg) <-- input
  we want our output to be:
  a row beginning with the name of the location

  a row with a location, and subsequent 14 outputs of average cookies sold per hour
*/
/*var FirstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCkSale: 6.3,
  cookiesPerHour:[],
  totalCookies: 0,
  dailySales: function () {
    var min = this.minCust;
    var max = this.maxCust;
    var salesContainer = document.getElementById('first-and-pike');

    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      this.cookiesPerHour[i] = cookieNum;

      this.totalCookies = this.totalCookies + cookieNum;
      
      var rowElement = document.createElement('li');
      rowElement.textContent = hour[i] + ': ' + cookieNum;
      salesContainer.appendChild(rowElement);
    }

      var rowSumElement = document.createElement('li');
      rowSumElement.textContent = this.totalCookies;
      salesContainer.appendChild(rowSumElement);
  }
};

FirstAndPike.dailySales();
FirstAndPike.cookiesPerHour;

var Seatac = {
  minCust: 3,
  maxCust: 24,
  avgCkSale: 1.2,
  cookiesPerHour:[],
  totalCookies: 0,
  dailySales: function () {
    var min = this.minCust;
    var max = this.maxCust;
    var salesContainer = document.getElementById('seatac');
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      this.cookiesPerHour[i] = cookieNum;

      this.totalCookies = this.totalCookies + cookieNum;
      
      var rowElement = document.createElement('li');
      rowElement.textContent = hour[i] + ': ' + cookieNum;
      salesContainer.appendChild(rowElement);
    }

      var rowSumElement = document.createElement('li');
      rowSumElement.textContent = this.totalCookies;
      salesContainer.appendChild(rowSumElement);
  }
};

Seatac.dailySales();
Seatac.cookiesPerHour;

var SeattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCkSale: 3.7,
  cookiesPerHour:[],
  totalCookies: 0,
  dailySales: function () {
    var min = this.minCust;
    var max = this.maxCust;
    var salesContainer = document.getElementById('seattle-center');
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      this.cookiesPerHour[i] = cookieNum;

      this.totalCookies = this.totalCookies + cookieNum;
    
      var rowElement = document.createElement('li');
      rowElement.textContent = hour[i] + ': ' + cookieNum;
      salesContainer.appendChild(rowElement);
    }

      var rowSumElement = document.createElement('li');
      rowSumElement.textContent = this.totalCookies;
      salesContainer.appendChild(rowSumElement);
  }
};

SeattleCenter.dailySales();
SeattleCenter.cookiesPerHour;

var CapHill = {
  minCust: 20,
  maxCust: 38,
  avgCkSale: 2.3,
  cookiesPerHour:[],
  totalCookies: 0,
  dailySales: function () {
    var min = this.minCust;
    var max = this.maxCust;
    var salesContainer = document.getElementById('cap-hill');
    for (var i = 0; i < 15; i++) {
      var randomCustNum = Math.floor(Math.random() * (max- min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      this.cookiesPerHour[i] = cookieNum;
      
      this.totalCookies = this.totalCookies + cookieNum;
      
      var rowElement = document.createElement('li');
      rowElement.textContent = hour[i] + ': ' + cookieNum;
      salesContainer.appendChild(rowElement);
    }

      var rowSumElement = document.createElement('li');
      rowSumElement.textContent = this.totalCookies;
      salesContainer.appendChild(rowSumElement);
  }
};

CapHill.dailySales();
CapHill.cookiesPerHour;

var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCkSale: 4.6,
  cookieSalesArray:[],
  totalCookies: 0,
  dailySales: function () {
    var min = this.minCust;
    var max = this.maxCust;
    
    var salesContainer = document.getElementById('alki');

    for (var i = 0; i < hour.length; i++) {
      var randomCustNum = Math.floor(Math.random() * (max - min + 1) + min);
      
      var avg = this.avgCkSale;
      
      var cookieNum = Math.round(randomCustNum*avg);
      console.log(cookieNum);
      this.cookieSalesArray.push(cookieNum);

      this.totalCookies += this.cookieSalesArray[i];
      // console.log(this.cookieSalesArray);
      // console.log(this.totalCookies);
      
      var rowElement = document.createElement('li');
      rowElement.textContent = hour[i] + ': ' + cookieNum;
      salesContainer.appendChild(rowElement);
    }

      var rowSumElement = document.createElement('li');
      rowSumElement.textContent = this.totalCookies;
      salesContainer.appendChild(rowSumElement);
  }
};

Alki.dailySales();
Alki.cookiesPerHour;
*/









