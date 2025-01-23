// Declaro los arrays que vamos a iterar y concatenar

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

// Llamo a la funcion pasandole como argumentos los array

generarDominio(pronoun, adj, noun)

// Declaro la funcion

function generarDominio(arr1, arr2, arr3){

  // Itero sobre los arrays
  // Guardo el resultado en variavles
  // Declaro extenciones y cojo una random
  // Concateno todo despues de los bucles para que se generen
  
  // Con esta forma de hacerlo podriamos añadir mas elementos
  //    a los arrays y seguiria funcionando

  let part1 = ""
  let part2 = ""
  let part3 = ""

  let extenciones = ['.com', '.es', '.net'];

  
  for(let i = 0; i < arr1.length; i++){
    
    part1 = arr1[i] 

    for(let i = 0; i < arr2.length; i++){
      
      part2 = arr2[i] 

      for(let i = 0; i < arr3.length; i++){
        
        part3 = arr3[i] 

        let rndExt = Math.floor(Math.random() * extenciones.length)
        
        console.log(part1 + part2 + part3 + extenciones[rndExt])
        
      }
    }
  }

}