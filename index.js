class Pizza{
    constructor (id, tipo, ingredientes, valor){
        this.id = id;
        this.tipo = tipo;
        this.ingredientes = ingredientes;
        this.valor = valor; 
    }
    
}
const inputPizza = document.getElementById("inputPizza");
const error = document.getElementById("error");
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const botonPizza = document.getElementById("botonPizza");


const pizzas = [
    new Pizza (1, "Muzzarella", ['masa', 'muzza', 'salsa', 'aceitunas'], 500),
    new Pizza (2, "Doble muzza", ['masa', 'doble muzza', 'salsa', 'aceitunas'], 600),
    new Pizza (3, "Especial", ['masa', 'queso', 'salsa', 'jamon', 'aceitunas'], 800),
    new Pizza (4, "Especial Palmito", ['masa','queso','salsa','jamon','palmitos','salsa golf'], 900),
    new Pizza (5, "Peperoni", ['masa', 'queso', 'salsa', 'peperoni'], 1200),
    new Pizza (6, "napolitana", ['masa', 'queso', 'salsa', 'tomate', 'aceitunas'], 590),

]





function todoMal(message) {
    nombre.innerText = "";
    precio.innerText = "";
    inputPizza.classList.add("inputError");
    error.innerText = message;
  }
  
  function todoBien() {
    inputPizza.classList.remove("inputError");
    error.innerText = "";
  }
  
  function traerPizza() {
      if (inputPizza.value != "") {
          const pizza = pizzas.find ((pizza) => {
              return pizza.id == inputPizza.value;
          });
          if (pizza != undefined) {
              nombre.innerText = pizza.tipo;
              precio.innerText = `$${pizza.valor}`;
        todoBien();
          } else {
        todoMal("La pizza no existe");
          }
      } else {
      todoMal("Debe completar este campo");
    }
  }
  
  function init() {
	botonPizza.addEventListener("click", (e) => {
    e.preventDefault();
    traerPizza();
  });
}

init();
 