document.addEventListener("DOMContentloaded", function(){
  document.getElementById('2019').addEventListener("click", printImages);
  document.getElementById('2018').addEventListener("click", printImages);
  document.getElementById('2017').addEventListener("click", printImages);
  document.getElementById('2016').addEventListener("click", printImages);
});



function printImages(){
  for(i=1; i<=ANZAHL_ELEMENTE_IM_ORNDER; i++) {
    var test = document.createElement ("img");
    test.src = "images/IMG("+i+").png";
    document.querySelector (".images").appendChild(test)
  }
}
