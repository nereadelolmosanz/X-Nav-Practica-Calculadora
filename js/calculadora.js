var calc = function(){
  $(".display").val("0");
  var equation = "";
  var exp = "";
  var ans = "0";
  var sqr = false;
  var pow = false;

  $(".num").click(function(){
    if (pow) {
      exp = $(this).html();
    }
    equation += $(this).html();
    $(".display").val(equation);
  });

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
  });


  function equals(){
    if (pow){
      pow = false;
      ans = Math.pow(parseFloat(ans),parseFloat(exp));
    }else {
      ans = eval(equation);
    }
    $(".display").val(ans);
    equation = "";
  }
  $(".equals").click(equals);


  function clear(){
    equation = "";
    op1 = "";
    op2 = "";
    ans = "";
    $(".display").val(0);
  }
  $(".clear").click(clear);


  $(window).keypress(function(e){
    // Borrar un caracter
		if(e.which == 8){
			e.preventDefault();
	    clear();
    // Calcular el resultado
		}else if(e.which == 13){
			e.preventDefault();
			equals();
    // Shift
		}else if (e.which == 16){
      if (equation == ""){
        equation += ans;
      }
			$(window).keypress(function(e){
    		if(e.which == 53){ // %
          ans = eval(equation)/100;
          equation = ans + "*";
        } else if (e.which == 56){
          equation += '(';
        } else if (e.which == 57){
          equation += ')';
        } else if (e.which == 192){
          pow = true;
          console.log(equation);
          ans = equation;
          equation += "^";
          console.log(equation);
        } else if (e.which == 171){
          equation += "*";
        } else if (e.which == 55){
          equation += "/";
        }
      });
    } else if (e.which == 47 || e.which == 111){
      if (equation == ""){
        equation += ans;
      }
      equation += '/';
    } else if (e.which == 42){
      if (equation == ""){
        equation += ans;
      }
      equation += '*';
    } else if (e.which == 45 || e.which == 106){
      if (equation == ""){
        equation += ans;
      }
      equation += '-';
    } else if (e.which == 43){
      if (equation == ""){
        equation += ans;
      }
      equation += "+";
    } else if(e.which == 46){
      if (equation == ""){
        equation += ans;
      }
			equation += ".";
    } else if (e.which == 48){
      if (pow) {
        exp = 0;
      }
      equation += '0';
    } else if (e.which == 49){
      if (pow) {
        exp = 1;
      }
      equation += '1';
    } else if (e.which == 50){
      if (pow) {
        exp = 2;
      }
      equation += '2';
    } else if (e.which == 51){
      if (pow) {
        exp = 3;
      }
      equation += "3";
    } else if (e.which == 52){
      if (pow) {
        exp = 4;
      }
      equation += '4';
    } else if (e.which == 53){
      if (pow) {
        exp = 5;
      }
      equation += '5';
    } else if (e.which == 54){
      if (pow) {
        exp = 6;
      }
      equation += '6';
    } else if (e.which == 55){
      if (pow) {
        exp = 7;
      }
      equation += "7";
    } else if (e.which == 56){
      if (pow) {
        exp = 8;
      }
      equation += '8';
    } else if (e.which == 57){
      if (pow) {
        exp = 9;
      }
      equation += '9';
    }
		$("#display").val(equation);
	});


};
jQuery(document).ready(calc);
