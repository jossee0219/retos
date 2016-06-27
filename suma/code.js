function suma() {
  try{
      n1 = parseFloat(prompt("Ingrese Primer Número"));
      n2 = parseFloat(prompt("Ingrese Primer Número"));
      suma = n1 + n2;
      mostrar(suma);
  }
  catch(err){
      document.getElementById("mensaje").innerHTML = err.message;
  }
}

function mostrar(suma){
  document.getElementById("mensaje").innerHTML = "La suma es = " + suma;
}


