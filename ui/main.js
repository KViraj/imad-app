var button = document.getElementById("counter");
var counter=0;

button.onclick = function () {
  //Request to server counter endpoint
  
  //get response & store in var
  
  //render variable in span
  counter+=1;
  var spann = document.getElementById("count");
  spann.innerHTML = counter.toString();
};