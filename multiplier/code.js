function multiplier(v1,n){ //recibo vector digitado por usuario y el numero por el cual se multiplica.
  v2 = []; // creo vector vacio.
  for (var i = 0; i < v1.length; i++) {
    v2[i] = v1[i] * n;
  }
  alert("Su nuevo vector  es: " + v2);
  alert("Hasta luego amigo!");
}

function rt(){
  t = parseFloat(prompt("Buenas las tenga, digite la cantidad de números a ingresar entre 1 y 10"));
  if (t<1 || t>10) {
    alert("No sea bruto, lea bien");
  }
  else {
    alert("Bien (y)");
  }
  cv(t);
}

function cv(t){
  v1 = [];
  for (var i = 0; i < t ; i++) {
    v1[i] = parseFloat(prompt("Digite el número de la posición" + (i+1)));
  }
  n1 = parseFloat(prompt("Digite # por el cual desea multiplicar los numeros"));
  multiplier(v1,n1);
}