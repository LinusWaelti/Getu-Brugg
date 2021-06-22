document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('2021').addEventListener("click", printImages2021);
  document.getElementById('2019').addEventListener("click", printImages2019);
  document.getElementById('2018').addEventListener("click", printImages2018);
  document.getElementById('2017').addEventListener("click", printImages2017);
})

// IMAGES STILL NOT VISIBLE

function printImages2021(){
  document.querySelector(".boxes").style.display = "none";
  document.querySelector("#photosYear").innerHTML = "";
  for(i=1; i<=32; i++) {
    var test = document.createElement ("img");
    test.src = "images/2021_bearbeitet/IMG ("+i+").jpg";
    test.style.width = "20%";
    test.style.height = "auto";
    document.querySelector("#photosYear").appendChild(test)
  }
  document.querySelector("h1").innerHTML = "Fotos 2021";
}

function printImages2019(){
  document.querySelector(".boxes").style.display = "none";
  document.querySelector("#photosYear").innerHTML = "";
  for(i=1; i<=88; i++) {
    var test = document.createElement ("img");
    test.src = "images/2019_bearbeitet/IMG ("+i+").jpg";
    test.style.width = "20%";
    test.style.height = "auto";
    document.querySelector("#photosYear").appendChild(test);
  }
  document.querySelector("h1").innerHTML = "Fotos 2019";
}

function printImages2018(){
  document.querySelector(".boxes").style.display = "none";
  document.querySelector("#photosYear").innerHTML = "";
  for(i=1; i<=11; i++) {
    var test = document.createElement ("img");
    test.src = "images/2017_bearbeitet/IMG ("+i+").jpg";
    test.style.width = "20%";
    test.style.height = "auto";
    document.querySelector ("#photosYear").appendChild(test)
  }
  document.querySelector("h1").innerHTML = "Fotos 2018";
}

function printImages2017(){
  document.querySelector(".boxes").style.display = "none";
  document.querySelector("#photosYear").innerHTML = "";
  for(i=1; i<=108; i++) {
    var test = document.createElement ("img");
    test.src = "images/2017_bearbeitet/IMG ("+i+").jpg";
    test.style.width = "20%";
    test.style.height = "auto";
    document.querySelector ("#photosYear").appendChild(test)
  }
  document.querySelector("h1").innerHTML = "Fotos 2017";
}
