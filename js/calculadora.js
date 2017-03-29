var calc = function(){
  var equation = "";
  var op1 = "";
  var op2 = "";
  var sqr = false;
  var pow = false;

  $(".num").click(function(){
    if (op1 != ""){
      op2 = $(this).html();
    }
    equation += $(this).html();
    $(".display").val(equation);
  })

  $(".operator").click(function(){
    if ($(this).html() == "√"){
      equation = Math.sqrt(parseFloat(equation));
      $(".display").val(equation);
    } else {
      if ($(this).html() == "x") {
        equation += "*";
      } else if ($(this).html() == "÷") {
        equation += "/";
      } else if ($(this).html() == "^"){
        pow = true;
        if (op1 == ""){
          op1 = equation;
        }
        equation += $(this).html();
      } else {
        equation += $(this).html();
      }
      $(".display").val(equation);
    }
  })

  $(".equals").click(function(){
    if (pow){
      pow = false;
      if (op1 == ""){
        equation = 0;
      } else {
        console.log(op1);
        console.log(op2);
        equation = Math.pow(parseFloat(op1),parseFloat(op2));
      }
    } else {
      equation = eval(equation);
    }
    $(".display").val(equation);
    op1 = equation;
  })

  $(".clear").click(function(){
    equation = "";
    op1 = "";
    op2 = "";
    $(".display").val(0);
  })

};

jQuery(document).ready(calc);
