document.addEventListener("DOMContentLoaded", function(){
  getYear();
  document.getElementById('submitButton').addEventListener("click", getDataForm);
});

function getYear(){
  // source: https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript //
  var year = new Date().getFullYear();
  document.getElementById('trainingYear').innerHTML += year;
}

function getDataForm() {
  // src: https://www.emailjs.com/docs/sdk/send-form/
  emailjs.sendForm("service_kr3zfs9", "template_nwbj1yt", "#trainingRegistrationForm", "user_ppB1fg1ne065syN4NbozG");
  document.getElementById('trainingRegistrationForm').reset();
}
