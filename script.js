// TODO: Box needs to rechange color when mouseout
document.addEventListener("DOMContentLoaded", function(){
  getYear();
  document.getElementById('home').addEventListener("mouseover", hoverHeader);
  document.getElementById('info').addEventListener("mouseover", hoverHeader);
  document.getElementById('training').addEventListener("mouseover", hoverHeader);
  document.getElementById('photos').addEventListener("mouseover", hoverHeader);
  document.getElementById('intern').addEventListener("mouseover", hoverHeader);
  document.getElementById('contact').addEventListener("mouseover", hoverHeader);
});

function hoverHeader(){
  this.style.backgroundColor = "#87cdff";
  console.log("Yep");
}

function homeNews(){

}

function getYear(){
  var year = new Date().getFullYear();
  document.getElementById('trainingYear').innerHTML = "Wenn du Interesse am Geräteturnen hast und einen Einblick in ein Training haben möchtest, dann melde dich für die Schnuppertrainings im September " + year + " an.";
}
