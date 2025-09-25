/*function factorial (numero){
  let resultado = 1
  for (let i = 1; i<= numero; i++){
    resultado = resultado * i
  }
  return resultado 

}

const fac = factorial(6)
console.log (fac)
console.log("Otra vez:", fac)*/
/*
function factorial (numero) {
   let resultado = 1
   for (let i = 1; i<= numero; i++){ 
    resultado = resultado * i
  }
  return resultado 

}

const fac = factorial(6)
console.log(fac)
*/

const recetas = [
    {
        nombre: "pan",
        ingredientes: ["azucar","harina", "agua"],
        precio: 45000, 
        peso: 93.5
    },
    {
        nombre: "Bandeja paisa",
        ingredientes: ["Huevo","Chicharron", "Arroz", "Frijoles"],
        precio: 60000, 
        peso: 8000.634
    },

]

recetas.forEach(function(receta){
    console.log(`
        Nombre de la receta: ${receta.nombre},
        precio: ${receta.precio}
        Ingredientes: ${receta.ingredientes.map ((i,ingredientes) => `$ {i*1}: ${ingredientes}\n`)}
        `)
})
          





















