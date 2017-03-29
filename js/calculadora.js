var calc = function(){

  var equation = "";
  //Click a los numeros
  $(".num").click(function(){
    equation += $(this).html();
    //console.log("eq: " + equation);
    //$(".display").html(equation);
    //console.log("disp: " + $(".display").html());
  });
};

jQuery(document).ready(calc);
