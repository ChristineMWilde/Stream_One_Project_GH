



  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });


var email = document.getElementById("mail");

email.addEventListener("input", function () {
if (email.validity.typeMismatch) {
email.setCustomValidity("I expect an e-mail");
} else {
email.setCustomValidity("");
}
});


