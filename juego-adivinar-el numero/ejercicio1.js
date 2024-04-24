const leer = require("prompt-sync")();

const NUMERO_ADIVINAR = 9;
for(i=0;i<3;i++){
  let numerosIngresados= Number(leer());
  if(numerosIngresados==NUMERO_ADIVINAR){
    i=3;
    console.log("ganaste");
  }
}



    
  