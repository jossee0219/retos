function fizzbuzz(){
  try{
    n1 =  parseFloat(prompt("Ingrese Número"));
    if (n1 %3 == 0 && n1 %5 ==0) {
      document.getElementById("mensaje").innerHTML = " FizzBuzz" ;
    }
    else if (n1 %5 == 0) {
      document.getElementById("mensaje").innerHTML = " Buzz" ;
    }
    else if (n1 %3 == 0){
      document.getElementById("mensaje").innerHTML = " Fizz" ;
    }
    else{
      document.getElementById("mensaje").innerHTML = n1;
    }
  }
  catch(err){
      document.getElementById("mensaje").innerHTML = err.message;
  }
}