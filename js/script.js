let age = prompt("Ingresá tu año de nacimiento");

if (age<=2004){
    alert("Genial! Puedes ingresar a la página");
}else if(age>2004){
    alert("Vuelve cuando seas mayor de edad");
}


let buyerOpction = "";

do {
    buyerOpction = prompt("Por favor, elige una opción: \nCerveza Negra \nCerveza Rubia \nFinalizar Compra")
    

    if (buyerOpction != "Cerveza Negra" && buyerOpction != "Cerveza Rubia" && buyerOpction != "Finalizar Compra"){

        alert ('Entrada inválida');
        continue;
    }



} while (buyerOpction != "Finalizar compra");

