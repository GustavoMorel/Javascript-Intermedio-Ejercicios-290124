function generarRecetaAleatoria() {
    // Lista de vegetales y aderezos
    const vegetales = ["Lechuga", "Tomate", "Zanahoria", "Pimiento", "Cebolla"];
    const aderezos = ["Aceite de oliva", "Vinagre balsámico", "Mostaza", "Mayonesa", "Salsa de yogur"];
  
    // Función para obtener elementos aleatorios de una lista
    function obtenerElementosAleatorios(lista, cantidad) {
      const elementosAleatorios = [];
      while (elementosAleatorios.length < cantidad) { //se realiza mientras el tamaño del array elementosAleatorios sea inferior a cantidad
        const elemento = lista[Math.floor(Math.random() * lista.length)]; //calculo aleatorio con base a tamaño de lista
        if (!elementosAleatorios.includes(elemento)) { //Si no existe elemento en el Array
          elementosAleatorios.push(elemento); //Pone elemento en el Array
        }
      }
      return elementosAleatorios; //retorna array
    }
  
    // Generar receta aleatoria
    const vegetalesAleatorios = obtenerElementosAleatorios(vegetales, 5); //función obtenerElementosAleatorios toma como paramentros lista=vegetales y cantidad=5
    const aderezosAleatorios = obtenerElementosAleatorios(aderezos, 5); //función obtenerElementosAleatorios toma como paramentros lista=aderezos y cantidad=5
  
    // Construir la receta
    const receta = [...vegetalesAleatorios, ...aderezosAleatorios]; //construye el array recetas y lo guarda en una variable del tipo const

    return receta;
  }
  
  // Genera Receta y muestra por consola
  const recetaAleatoria = generarRecetaAleatoria(); //corre la función generarRecetaAleatoria y lo guarda en la const recetaAleatoria
 console.log(recetaAleatoria);
  console.log("Receta Aleatoria Futurista:", recetaAleatoria.join(', ')); //con join, agrega una coma a los elementos del array recetaAleatoria
  