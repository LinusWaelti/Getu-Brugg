document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('2021').addEventListener("click", printImages2021);
  document.getElementById('2019').addEventListener("click", printImages2019);
  document.getElementById('2018').addEventListener("click", printImages2018);
  document.getElementById('2017').addEventListener("click", printImages2017);
})

// IMAGES STILL NOT VISIBLE

function printImages2021(){
  document.querySelector(".boxes").style.display = "none";
  for(i=1; i<=32; i++) {
    var test = document.createElement ("img");
    test.src = "images/2021_ungeordnet/IMG ("+i+").jpg";
    document.querySelector("#photosYear").appendChild(test)
  }
  document.querySelector("h1").innerHTML += " 2021";
}

function printImages2019(){
  document.querySelector(".mainContent").style.display = "none";
  for(i=1; i<=88; i++) {
    var test = document.createElement ("img");
    test.src = "images/2019_ungeordnet/IMG ("+i+").jpeg";
    document.querySelector("#photosYear").appendChild(test);
  }
  document.querySelector("h1").innerHTML += " 2019";
}

function printImages2018(){
  document.querySelector(".mainContent").style.display = "none";
  for(i=1; i<=11; i++) {
    var test = document.createElement ("img");
    test.src = "images/2017_ungeordnet/IMG ("+i+").jpeg";
    document.querySelector ("#photosYear").appendChild(test)
  }
  document.querySelector("h1").innerHTML += " 2018";
}

function printImages2017(){
  document.querySelector(".mainContent").style.display = "none";
  for(i=1; i<=108; i++) {
    var test = document.createElement ("img");
    test.src = "images/2017_ungeordnet/IMG ("+i+").jpeg";
    document.querySelector ("#photosYear").appendChild(test)
  }
  document.querySelector("h1").innerHTML += " 2017";
}
