
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });



 function validateForm() {
 var a = document.forms["OrderOnline"]["fname"].value;
 var b = document.forms["OrderOnline"]["sname"].value;
 var c = document.forms["OrderOnline"]["street"].value;
 var d = document.forms["OrderOnline"]["pCode"].value;

    if (a == "") {
        alert("First name must be filled out");
    }
    else if (b == "") {
        alert("Surname must be filled out");   
  }

 else if (c == "") {
        alert("The street name must be filled out");
        
  }

 else if (d == "") {
        alert("The postcode must be filled out");
        
  } else {

  window.open("payment.html", "width:100px height:200px");

  }
}




