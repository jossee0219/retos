function rt(){
  t = parseFloat(prompt("Buenas las tenga, digite la cantidad de números a ingresar entre 1 y 10"));
  if (t<1 || t>10) {
    alert("No sea bruto, lea bien");
  }
  else {
    cv(t);
  }

}

function cv(t){
  v1 = [];
  for (var i = 0; i < t ; i++) {
    v1[i] = parseFloat(prompt("Digite el número de la posición" + (i+1)));
  }
  sumame(v1);
}

function sumame(v1){ //recibo vector digitado por usuario.
  suma = 0;
  for (var i = 0; i < v1.length; i++) {
    suma += v1[i];
  }
  alert("La suma de los elementos de su vector es: " + suma);
  alert("Hasta luego amigo!");
}


