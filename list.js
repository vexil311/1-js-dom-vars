'use strict';

var names = [['Яна', 'female'], ['Галя','female'],['Настя','female'],
  ['Саша','female'],['Ася','female'],['Егор','male'],['Валера','male'],
  ['Олег','male'], ['Лёня','male'], ['Миша','male']];
var jobs = ['Премьер-министр', 'Слесарь', 'Музыкант', 'Программист', 'Врач',
  'Повар', 'Водитель', 'Шахтёр', 'Преподаватель', 'Бухгалтер'];
var minSalary = 20;
var maxSalary = 120;
var minAge = 20;
var maxAge = 35;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function removeFromArray(array, value) {
  var indexName = array.indexOf(value);
  if (indexName > -1) {
    array.splice(indexName, 1);
  };
}

function Person() {
  this.name = undefined;
  this.sex = undefined;
  this.age = undefined;
  this.occupation = undefined;
  this.salary = undefined;
};

var multiplyByPx = function(string, int) {
  string = string.slice(0, -2);
  string = (Number(string) * Number(int)) + 'px';
  return string;
};

var applyingStyles = function(selectedItem) {
  if (selectedItem.querySelector('.salary').innerHTML < 50000) {
    selectedItem.style.backgroundColor = 'red';
  }
  else if (selectedItem.querySelector('.salary').innerHTML > 80000) {
    selectedItem.style.backgroundColor = 'green';
  }
  else {
    selectedItem.style.backgroundColor = 'yellow';
  };

  if ((selectedItem.querySelector('.age').innerHTML < 27) &&
      (selectedItem.querySelector('.age').innerHTML > 20)) {
    selectedItem.querySelector('.name').style.fontWeight = 'bold';
  };

  if (selectedItem.querySelector('.occupation').innerHTML === 'Премьер-министр') {
    selectedItem.querySelector('.occupation').style.textDecoration = 'underline';
  };

  if (selectedItem.querySelector('.sex').innerHTML == 'female') {
    selectedItem.style.fontSize = multiplyByPx(selectedItem.style.fontSize, 1.5);
  };
}

var generatePersonsList = function(arrayNames, arrayJobs) {
  var personaList = [];
  while (arrayJobs.length > 0) {
    var id = new Person();
    var tmpItem = arrayNames[getRandomInt(0, arrayNames.length - 1)];
    id.name = tmpItem[0];
    id.sex = tmpItem[1];
    removeFromArray(arrayNames, tmpItem);
    id.salary = getRandomInt(minSalary, maxSalary) * 1000;
    id.age = getRandomInt(minAge, maxAge);
    id.occupation = arrayJobs[getRandomInt(0, arrayJobs.length - 1)];
    removeFromArray(arrayJobs, id.occupation);
    personaList.push(id);
  }
  var list = document.createElement('ul');
  document.body.appendChild(list);
  for(var i = 0; i < personaList.length; i++) {
    var item = document.createElement('li');
    item.style.fontSize = '15px';
    list.appendChild(item);
    for (var property in personaList[i]) {
      var tmpDiv = document.createElement('div');
      tmpDiv.className = property;
      item.appendChild(tmpDiv);
      tmpDiv.appendChild(document.createTextNode(personaList[i][property]));
    };
  }
};

generatePersonsList(names, jobs);
for (var i = 0; i < document.querySelectorAll('li').length; i++) {
  applyingStyles(document.querySelectorAll('li')[i]);
};
