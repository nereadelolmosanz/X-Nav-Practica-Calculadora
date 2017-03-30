var calc = function(){

  $(".display").val("0");
  var equation = "";
  var exp = "";
  var ans = "0";
  var sqr = false;
  var pow = false;
  var perc = false;

  $(".num").click(function(){
    if (pow) {
      exp = $(this).html();
    }
    equation += $(this).html();
    $(".display").val(equation);
  })

  $(".operator").click(function(){
    if (equation == ""){
      equation += ans;
    }
    if ($(this).html() == "√"){
      equation = eval(equation);
      ans = Math.sqrt(parseFloat(equation));
      $(".display").val(ans);
      if (ans == NaN) {
        ans = "0";
      }
      equation = "";    
    } else {
      if ($(this).html() == "x") {
        equation += "*";
      } else if ($(this).html() == "÷") {
        equation += "/";
      } else if ($(this).html() == "^"){
        pow = true;
        ans = equation;
        equation += "^";
      } else if ($(this).html() == "%"){
        ans = eval(equation)/100;
        equation = ans + "*";
      } else {
        equation += $(this).html();
      } 
      $(".display").val(equation);
    }
  })

  $(".equals").click(function(){
    if (pow){
      pow = false;
      ans = Math.pow(parseFloat(ans),parseFloat(exp));
    }else {
      ans = eval(equation);
    }
    $(".display").val(ans);
    equation = "";
  })

  $(".clear").click(function(){
    equation = "";
    op1 = "";
    op2 = "";
    ans = "";
    $(".display").val(0);
  })

};

jQuery(document).ready(calc);
