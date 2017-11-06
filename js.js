var question = prompt('Какой тег объявляет тип документа и предоставляет основную информацию для браузера — его язык и версию?', '');
var i = 0;
if (question === '<!DOCTYPE>') {
  alert('Верно', ++i);
} 
else {
  alert('Нет');
}
console.log(i);

var question = prompt('Какой тег представляет тело документа?', '');
var i = i;
if (question === '<body>') {
alert('Верно', ++i);
} 
else {
alert('Нет');
}
console.log(i);

var question = prompt('Какой тег представляет параграфы в тексте?', '');
var i = i;
if (question === '<p>') {
  alert('Верно', ++i);
} else {
  alert('Неправильно');
}
console.log(i);

var question = prompt('Какой тег используется для группировки блочных элементов?', '');
var i = i;
if (question === '<div>') {
  alert('Да, верно', ++i);
} else {
  alert('Неправильно');
}
console.log(i);

var question = prompt('Каким тегом обозначается горизонтальная линия?', '');
var i = i;
if (question === '<hr>') {
  alert('Да, верно', ++i );
} else {
  alert('Неправильно');
}
console.log(i);

var question = prompt('Какой тег используется для форматирования отрывков текста?', '');
var i = i;
if (question === '<span>') {
  alert('Да, верно', ++i );
} else {
  alert('Неправильно');
}
console.log(i);

var question = prompt('Какой тег создает маркированный список?', '');
var i = i;
if (question === '<ul>') {
  alert('Да, верно', ++i );
} else {
  alert('Неправильно');
}
console.log(i);

var question = prompt('Какой тег создает нумерованный список?', '');
var i = i;
if (question === '<ol>') {
  alert('Да, верно', ++i );
} else {
  alert('Неправильно');
}
console.log(i);

var question = confirm('Узнать результат', '');
var i = i;
if(i<=5)  {
  alert('Плохо! Надо учить еще!!!' );
} else {
  alert('Отлично!!!');
};