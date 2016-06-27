function pi()
{
  for (var i = 0; i < 20 ; i++) {
    if (i == 0){
      alert("El número 0 es neutro");
    }
    else if (i % 2 == 0) {
      alert("El número " + i + " es par");
    }
    else{
      alert("El número " + i + " es  impar");
    }
  }
}