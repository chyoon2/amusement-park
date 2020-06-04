//Businasty logic
var height = feetInput * 12 + inchInput;

//Interface logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const feetInput = parseInt($("#height-feet").val());
    const inchInput = parseInt($("#height-inches").val());
    
    if (height < 60) {
      (#too-short).show();
    }
    else if (height > 80) {
      (#too-height).show();
    }
    else {
      (#just-right).show();
    }      
  });
});