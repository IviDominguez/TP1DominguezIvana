let age = prompt("Ingresá tu año de nacimiento");
let buyerOpction; 
let opction;
let opction2;

if (age <= 2004) {
  alert("Genial! Puedes ingresar a la página");
  do {
    buyerOpction = prompt("Por favor, elige una opción: \nCerveza Negra \nCerveza Rubia \nFinalizar compra");
    switch (buyerOpction) {
      case "Cerveza Negra": 
        mostrarCompra(buyerOpction); 
        if (opction = "Cerveza Negra") {
          opction2 = parseInt(prompt("Elige cuantas quieres!"));
          mostrarTotal(sumar(opction2,opction));
        }else if (isNaN(opction2)){
          alert("Ingresá un número");
        }
        continue;
        
      case "Cerveza Rubia":
        mostrarCompra(buyerOpction);
        if (opction = "Cerveza Rubia"){
          opction2 = parseInt(prompt("Elige cuantas quieres!"));
          mostrarTotal(sumar(opction2,opction));  
        }else if (isNaN(opction2)){
          alert("Ingresá un número");
        }
        continue;

      case "Finalizar compra":
        alert("Muchas Gracias por Comprar :D");
        continue;
      default:
        alert("Ingrese las opciones RECOMENDADAS");
        continue;
    }
    
  } while (buyerOpction != "Finalizar compra");
} else if (age > 2004) {
  alert("Vuelve cuando seas mayor de edad");
}

function mostrarCompra(productos) { 
  alert("Usted eligió: " + productos);
  console.log("Usted eligió: " + productos);
}

function sumar(opction2,opction){
  let suma = opction2 + " " + opction;
  return suma;

}

function mostrarTotal(mensaje) {
  alert ("Usted compró: " + opction2 + " " + opction)
  console.log (mensaje);
}





