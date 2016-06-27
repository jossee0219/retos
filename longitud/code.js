function longitud(){
  try{
    p =  prompt("Ingrese palabra");
    alert("La longitud de la setencia " +p+ " es " + p.length);

  }
  catch(err){
    document.getElementById("mensaje").innerHTML = err.message;
  }
}

