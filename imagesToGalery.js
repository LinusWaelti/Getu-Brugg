function getYear(){
  console.log("Hi");
}

function printImages2019(){
  for(i=1; i<=ANZAHL_ELEMENTE_IM_ORNDER; i++) {
    var test = document.createElement ("img");
    test.src = "PFAD/IMG("+i+").png";
    document.querySelector (".images").appendChild(test)
  }
  document.querySelector("h1").innerHTML += " 2019";
}

function printImages2018(){
  for(i=1; i<=ANZAHL_ELEMENTE_IM_ORNDER; i++) {
    var test = document.createElement ("img");
    test.src = "PFAD/IMG("+i+").png";
    document.querySelector (".images").appendChild(test)
  }
  document.querySelector("h1").innerHTML += " 2018";
}

function printImages2017(){
  for(i=1; i<=ANZAHL_ELEMENTE_IM_ORNDER; i++) {
    var test = document.createElement ("img");
    test.src = "PFAD/IMG("+i+").png";
    document.querySelector (".images").appendChild(test)
  }
  document.querySelector("h1").innerHTML += " 2017";
}

function printImages2016(){
  for(i=1; i<=ANZAHL_ELEMENTE_IM_ORNDER; i++) {
    var test = document.createElement ("img");
    test.src = "images/IMG("+i+").png";
    document.querySelector (".images").appendChild(test)
  }
  document.querySelector("h1").innerHTML += " 2016";
}
