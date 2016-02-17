function speak(name){
    console.log("Hello "+name);
    console.log("gogogogogo");
}

function speakSomething(what, howMany){

  var what = (typeof what !=="undefined") ? what:"Default Spech";
  var howMany = (typeof howMany !=="undefined") ? howMany: 3;

    for(var i=0;i<howMany;i++)
    console.log(what+" "+i+" ");

}

//functions are objects in javaScript
var speakSomething =  function(what, howMany){

    var what = (typeof what !=="undefined") ? what:"Default Spech";
    var howMany = (typeof howMany !=="undefined") ? howMany: 3;

    for(var i=0;i<howMany;i++)
        console.log(what+" "+i+" ");
}