//Businasty logic

//Interface logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    const feetInput = parseInt($("#height-feet").val());
    const inchInput = parseInt($("#height-inches").val());
    const height = feetInput * 12 + inchInput;

    if (height < 60) {
      $("#too-short").show();
    }
    else if (height > 80) {
      $("#too-tall").show();
    }
    else {
      $("#just-right").show();
    }      
  });
});