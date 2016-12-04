'use strict';

var timeUnits = ['seconds', 'minutes', 'hours', 'day', 'month', 'year'];

var parseUnits = function(arrayUnits) {
  var arraySwitcher = [];
  for (var i = 0; i < timeUnits.length; i++) {
    if(arrayUnits.includes(timeUnits[i])) {
      arraySwitcher[i] = true;
    }
    else {
      arraySwitcher[i] = false;
    }
  };
  return arraySwitcher;
};


var checkArrays = function(desiredArray, timeArray) {
  var result = '';
  for (var i = 0; i < timeArray.length; i++) {
    // хотелось реализовать через логическое или/и
    if(desiredArray[i] === true) {
      result += timeArray[i] + ' ';
    };
  };
  return result;
};

var setDateArray = function(date) {
  var outputArray = [];
  var second = date.getSeconds() + ' second(s)';
  var minute = date.getMinutes() + ' minute(s)';
  var hour = date.getHours() + ' hour(s)';
  var day = date.getDate() + ' day(s)';
  var month = date.getMonth() + ' month';
  var year = date.getFullYear() + ' year';
  var outputArray = [second, minute, hour, day, month, year];
  return outputArray;
}

function initializeClock(date, array) {
  var output = '';
  var explicitOutput = false;
  var currentDate = new Date();
  var arrayDesiredDate = [];
  var arrayDesiredUnits = [true, true, true, false, false, false];

  if(date === undefined) {
    arrayDesiredDate = setDateArray(currentDate);
  }

  else if(date instanceof Array) {
    arrayDesiredDate = setDateArray(currentDate);
    arrayDesiredUnits = parseUnits(date);
  }

  else {
    if(array === undefined) {
      explicitOutput = date;
    }
    else {
      arrayDesiredDate = setDateArray(date);
      arrayDesiredUnits = parseUnits(array);
    }
  }

  output = explicitOutput || checkArrays(arrayDesiredUnits, arrayDesiredDate);
  console.log(output);
}
