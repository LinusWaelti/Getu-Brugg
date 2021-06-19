document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('submitButton').addEventListener("click", getDataForm);
});

function getDataForm() {
  // src: https://www.emailjs.com/docs/sdk/send-form/
  emailjs.sendForm("service_kr3zfs9", "template_nwbj1yt", "#trainingRegistrationForm", "user_ppB1fg1ne065syN4NbozG");
  document.getElementById('trainingRegistrationForm').reset();
}
