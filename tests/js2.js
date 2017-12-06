
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });



function validateForm() {
 var x = document.forms["myForm"]["fname"].value;
 var y = document.forms["myForm"]["sname"].value;
    if (x == "") {
        alert("Name must be filled out");
    }

    if (y == "") {
        alert("surName must be filled out");
        
  } else{
  	email();

  }
}



function email(){

	var emailVal = function(email) {
    return email.length < 256 && /^[^@]+@[^@]+{2,}\.[^@]+{2,}$/.test(email);
};
}