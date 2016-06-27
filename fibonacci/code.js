function fibonacci() {
    n =  parseInt(prompt("Ingrese Número"));
    if (n == 0) {
      document.getElementById("mensaje").innerHTML = "0";
    }
    else if ( n == 1) {
      document.getElementById("mensaje").innerHTML = "1";
    }
    else if (n > 1 ){
      var c;
      a = 0, b = 1;
      for (var i = 2 ; i <= n ; i++) {
          c = a;
          a = b;
          b = a + c;
              }
      document.getElementById("mensaje").innerHTML = "fibonacci("+n+") = "+b;
    }
    else{
        document.getElementById("mensaje").innerHTML = "número negativo";
    }

  }


