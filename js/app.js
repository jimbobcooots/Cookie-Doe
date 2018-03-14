'use strict';

var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//create a thead element
var table = document.getElementById('sales-table');
var tableHeader = document.createElement('thead');

function makeHoursHeader() {
  var locationData = document.createElement('th');
  locationData.textContent = 'Location';
  
  var headerRow = document.createElement('tr');
  headerRow.appendChild(locationData);
 //append the th to the tr 
  for (var i = 0; i < hour.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = hour[i];
    headerRow.appendChild(thElement);
  }
//append tr to thead
  var totalsHeader = document.createElement('th');
  totalsHeader.textContent = 'Totals';
  headerRow.appendChild(totalsHeader);
  
  tableHeader.appendChild(headerRow);
  table.appendChild(tableHeader);
}

makeHoursHeader();

function cookieShop(location, minCust, maxCust, avgCkSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCkSale = avgCkSale;
  this.cookieSalesArray = [];
  this.salesTotal = 0;
  this.cookieSalesArray.push(this);
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
    this.cookieSalesArray.push(cookieNum);
    //we are pushing a value into our global var which = cookieSalesArray
   
    this.salesTotal += cookieNum;

    var rowElement = document.createElement('td');
    rowElement.textContent = cookieNum;
    trElement.appendChild(rowElement);
    //we want to append the cookieNum (rand number) <td> to the trElement
  }
    // var hourlyTotalRow = document.createElement('tfoot')
    // var hourTotal = 0;

  //   for (var j = 0; j < 4; j++) {
  //     //we want to push the totals of each hour to hourlyTotalRow
  //     //how do we get the totals of each row?
  //     //we want to get the index of sales on each row 
  //     var shop1 =  FirstAndPike.cookieSalesArray[i];
  //     var shop2 = Seatac.cookieSalesArray[i];
  //     var shop3 = SeattleCenter.cookieSalesArray[i];
  //     var shop4 = Alki.cookieSalesArray[i];
  //   }

  //   hourTotal += (shop1 + shop2 + shop3 + shop4);

  //   var footerData = document.createElement('td');
  //   footerData.textContent = hourTotal;
  //   hourlyTotalRow.appendChild(footerData);
  // }
    var trTotal = document.createElement('td')
    trTotal.textContent = this.salesTotal;
    trElement.appendChild(trTotal);

    table.appendChild(trElement);
    // table.appendChild(hourlyTotalRow);
};

var FirstAndPike = new cookieShop('First and Pike', 23, 65, 6.3);
var Seatac = new cookieShop('Seatac', 3, 24, 1.2);
var SeattleCenter = new cookieShop('Seattle Center', 11, 38, 3.7);
var Alki = new cookieShop('Alki', 2, 16, 4.6); 

FirstAndPike.render();
Seatac.render();
SeattleCenter.render();
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









