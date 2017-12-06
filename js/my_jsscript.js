
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });



/*Home page - lookup Cinnemon Magic Store Address function*/

function store(storeLookup){

var storeLookup = {

  england: "2 Bank Street, London, EC1, Tel:123456",
  ireland: "Temple Bar, Dublin 2, Tel: 123456",
  wales: "21 David's Avenue, Cardiff, Tel:123456",
  scotland: "South Bridge, Edinburgh EH8, Tel:123456",
};

  var country = document.getElementById("country");
      if (country.value == "england") {
        document.getElementById("storeAddress").innerHTML = storeLookup.england;
      }

      else if (country.value == "ireland") {
        document.getElementById("storeAddress").innerHTML = storeLookup.ireland;
       }

      else if (country.value == "wales") {
        document.getElementById("storeAddress").innerHTML = storeLookup.wales;
        }

      else if (country.value == "scotland") {
        document.getElementById("storeAddress").innerHTML = storeLookup.scotland;
        }
  
      else {
        document.getElementById("storeAddress").innerHTML = "Sorry there's an error";
       }
  }

/*Order Online page - form validation function*/

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


/*Order Online page - production availability function*/

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


/*Payment page - payment form validation function*/

  function payOrder(){
   var card = document.forms["onlinePayment"]["cardNumber"].value;
     if ((card.length <=15)||(card.length =="")) {
      alert("please enter a valid card number");
    }else{
      alert ("many thanks, your order has been submitted");
    }
    
  }


/*Bakery Products page - translation dictionary. Global variable can be accessed throughout the project*/
   var translation = {

  savoryDE: "Wir haben eine Auswahl an besten österreichischen herzhaften Produkten, darunter österreichische Knödel, Eintopf und Nudeln",
  savoryEN: "We have a selection of finest austrian savory products including austrian dumplings, stew and noodels",
  cakeDE: "Wir haben eine Auswahl an hervorragenden österreichischen Kuchen, darunter Strudel und Sachertorte",
  cakeEN: "We have a selection of superb austrian cakes including strudel and sachertorte",
  seasonalDE:"Die saisonale Auswahl umfasst Weihnachtskuchen und Kekse",
  seasonalEN:"The seasonal selection is here including Christmas cakes and biscuits",
};
function savoryTranslationDE(translation){
  var de1 = document.getElementById("translate1")
  de1.innerHTML = translation.savoryDE;
}

function savoryTranslationEN(translation){
  var en1 = document.getElementById("translate1")
  en1.innerHTML = translation.savoryEN;
}

function cakeTranslationDE(translation){
  var de2 = document.getElementById("translate2")
  de2.innerHTML = translation.cakeDE;
}

function cakeTranslationEN(translation){
  var en2 = document.getElementById("translate2")
  en2.innerHTML = translation.cakeEN;
}

function seasonalTranslationDE(translation){
  var de3 = document.getElementById("translate3")
  de3.innerHTML = translation.seasonalDE;
}

function seasonalTranslationEN(translation){
  var en3 = document.getElementById("translate3")
  en3.innerHTML = translation.seasonalEN;
}









 

		




