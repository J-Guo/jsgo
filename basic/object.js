
var animal ={
  genus:'bird',
    specis:'raven',
    callName:'squakwy',
    quto:'nevermore',
    noisey:true,
    deadly:false
};
//call proporty
animal.callName;

//call propoerty in other way
animal['callName'];

//add property
animal.color = 'blue';

//delete property
delete animal.color;

//emuate the object
for (var d in animal)
    console.log(d+" is :"+animal[d]);