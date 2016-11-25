'use strict';

var names = [['Яна', 'female'], ['Галя','female'],['Настя','female'],
  ['Саша','female'],['Ася','female'],['Егор','male'],['Валера','male'],
  ['Олег','male'], ['Лёня','male'], ['Миша','male']];
var jobs = ['Премьер-министр', 'Слесарь', 'Музыкант', 'Программист', 'Врач',
  'Повар', 'Водитель', 'Шахтёр', 'Преподаватель', 'Бухгалтер'];

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

var generatePersonsList = function(arrayNames, arrayJobs) {
  var personaList = [];
  while (arrayJobs.length > 0) {
    var id = new Person();
    var tmpItem = arrayNames[getRandomInt(0, arrayNames.length - 1)];
    id.name = tmpItem[0];
    id.sex = tmpItem[1];
    removeFromArray(arrayNames, tmpItem);
    id.salary = getRandomInt(20, 120);
    id.age = getRandomInt(20, 35);
    id.occupation = arrayJobs[getRandomInt(0, arrayJobs.length - 1)];
    removeFromArray(arrayJobs, id.occupation);
    personaList.push(id);
  }
  var list = document.createElement('ol');
  document.body.appendChild(list);
  for(var i = 0; i < personaList.length; i++) {
    var item = document.createElement('li');
    list.appendChild(item);
    item.appendChild(document.createTextNode(personaList[i].name + ', ' +
      personaList[i].age + ', ' + personaList[i].occupation +', ' +
      personaList[i].salary));
  }
};

generatePersonsList(names, jobs);
