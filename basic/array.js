var myArray = [];
//initialize an array
var weekday = ['Sunday','Wesday','Monday','Thursday'];

//add value to an array
weekday.push('Thuesday');

//other way to add value to an array
weekday[weekday.length] ='Thuesday';

//delete the latest element from an array
weekday.pop();

//delete specifized element from an array,
//first parameter is the index and the second parameter is the amount of elements
weekday.splice(1,1);

