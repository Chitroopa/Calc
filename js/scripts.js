var add = function(num1, num2) {
  return num1 + num2;
};
var subtract = function(num1, num2) {
  return num1 - num2;
};
var multiply = function(num1, num2) {
  return num1 * num2;
};
var divide = function(num1, num2) {
  return num1 / num2;
};
// front-end logic
$(document).ready(function() {
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var addresult = add(number1, number2);
    // var subresult = subtract(number1, number2);
    // var multresult = multiply(number1, number2);
    // var divresult = divide(number1, number2);
    $("#output").text(addresult);
  });
  $("form#Sub").submit(function(event){
    event.preventDefault();
    var subNum1 = parseInt($("#sub1").val());
    var subNum2 = parseInt($("#sub2").val());
    var subresult = subtract(subNum1, subNum2);
    // var multresult = multiply(number1, number2);
    // var divresult = divide(number1, number2);
    $("#subout").text(subresult);
  });
  $("form#multi").submit(function(event){
    event.preventDefault();
    var multInput1 = parseInt($("#multi1").val());
    var multInput2 = parseInt($("#multi2").val());
    var multiresult = multiply(multInput1, multInput2);
    $("#multiout").text(multiresult);
  });


});
