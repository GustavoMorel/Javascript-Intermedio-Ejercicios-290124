function generarPlanetasAleatorios() {
    const nombres = ["Sigma113", "Volcanus8", "Centellas866", "Amorfus5", "v355"];
    const colores = ["Rojo", "Verde", "Azul", "Naranja", "Amarillo"];
    const elementosQuimicos = ["Hidrógeno", "Helio", "Oxígeno", "Carbono", "Nitrógeno"];
    
    // Función para obtener elementos aleatorios de una lista
    function obtenerElementoAleatorio(lista) {
      return lista[Math.floor(Math.random() * lista.length)];
    }
  
    const planetas = [];
  
    for (let i = 0; i < 5; i++) {
      const nombre = `${obtenerElementoAleatorio(nombres)}`;
      const color = obtenerElementoAleatorio(colores);
      const elementoQuimico = obtenerElementoAleatorio(elementosQuimicos);
      const tamaño = Math.floor(Math.random() * (100 - 10) + 10); // Tamaño entre 10 y 100 (por ejemplo, en kilómetros)
  
      const planeta = [nombre, color, elementoQuimico, tamaño]; //construye array planeta
      planetas.push(planeta); //Va introduciendo Array generado a la const planetas[]
    }
  
    return planetas; //retorna la const planetas con los valores que surgen del for
  }
  
  // Generar planetas aleatorios
  const planetasAleatorios = generarPlanetasAleatorios();
  
  // Mostrar por consola el nombre, color y elemento químico de cada planeta
  console.log("Información de los Planetas Aleatorios:");
  planetasAleatorios.forEach(planeta => { //El método forEach() ejecuta la función indicada una vez por cada elemento del array.
    console.log(`Nombre: ${planeta[0]}, Color: ${planeta[1]}, Elemento Químico Preponderante: ${planeta[2]}, Tamaño del Planeta: ${planeta[3]} km de diametro`);
  });
  