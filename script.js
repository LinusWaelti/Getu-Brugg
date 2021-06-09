// TODO: Box needs to rechange color when mouseout
document.addEventListener("DOMContentLoaded", function(){
  getYear();
});

function getYear(){
  // source: https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript //
  var year = new Date().getFullYear();
  document.getElementById('trainingYear').innerHTML = "Wenn du Interesse am Geräteturnen hast und einen Einblick in ein Training haben möchtest, dann melde dich für die Schnuppertrainings im September " + year + " an.";
}
