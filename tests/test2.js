function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["sname"].value;

    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

}