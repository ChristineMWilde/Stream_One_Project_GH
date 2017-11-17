
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });



 function validateForm() {
 var a = document.forms["OrderOnline"]["fname"].value;
 var b = document.forms["OrderOnline"]["sname"].value;
 var c = document.forms["OrderOnline"]["street"].value;
 var d = document.forms["OrderOnline"]["pCode"].value;
 var e = document.forms["OrderOnline"]["pword"].value;
 var f = document.forms["OrderOnline"]["mail"].value;

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
        
  } 

  else if ((e.length <=6 ) || (e.length >= 10)) {
    alert("Passwords should not be less than 6 characters and a max of 10 characters");
  }

  else if (f == "" || f.indexOf('@') == -1 || f.indexOf('.') == -1) {

  alert("email format failed");
  
 } else {

  window.open("payment.html", "width:100px height:200px");

  }
}



function cakeAvail(){
  var cakeQuantity = document.getElementById("quantity1");
  if (cakeQuantity.value === "10") {
  alert("sorry that quantity box is currently unavailable");
} else {
  return false;
    }
}

function savoryAvail(){
  var savoryQuantity = document.getElementById("quantity2");
  if (savoryQuantity.value === "30") {
  alert("sorry that quantity box is currently unavailable");
} else {
  return false;
    }
}

function seasonalAvail(){
  var seasonalQuantity = document.getElementById("quantity3");
  if (seasonalQuantity.value === "10") {
  alert("sorry that quantity box is currently unavailable");
} else {
  return false;
    }
}


function store(){

  var country = document.getElementById("country");
      if (country.value == "england") {
        document.getElementById("storeAddress").innerHTML = "2 Bank Street, London, EC1 ";
      }

      else if (country.value == "ireland") {
        document.getElementById("storeAddress").innerHTML = "Temple Bar, Dublin 2";
       }

      else if (country.value == "wales") {
        document.getElementById("storeAddress").innerHTML = "21 David's Avenue, Cardiff";
        }

      else if (country.value == "scotland") {
        document.getElementById("storeAddress").innerHTML = "South Bridge, Edinburgh EH8";
        }
  
      else {
        document.getElementById("storeAddress").innerHTML = "Sorry there's an error";
       }
  }

  function payOrder(){
   var card = document.forms["onlinePayment"]["cardNumber"].value;
     if ((card.length <=15)||(card.length =="")) {
      alert("please enter a valid card number");
    }else{
      alert ("many thanks, your order has been submitted");
    }
    
  }

  









 

		




