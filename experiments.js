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
}

var FirstAndPike = new cookieShop('First and Pike', 23, 65, 6.3);
var Seatac = new cookieShop('Seatac', 3, 24, 1.2);
var SeattleCenter = new cookieShop('Seattle Center', 11, 38, 3.7);
var Alki = new cookieShop('Alki', 2, 16, 4.6); 

FirstAndPike.render();
Seatac.render();
SeattleCenter.render();
Alki.render();