var button = document.getElementById('counter');

button.onclick = function () {
  //Create Request to server counter endpoint
  var req = new XMLHttpRequest();
  
  
  //Capture response & store in var
  req.onreadystatechange = function() {
    if(req.readyState === XMLHttpRequest.DONE) {
        if(req.status === 200) {
            var countter = req.responseText;
            var spann = document.getElementById('count');
            spann.innerHTML = countter.toString();
        }
    }  
  };
  //Make Request
  req.open('GET','http://kviraj37.imad.hasura-app.io/counter',true);
  req.send(null);
};