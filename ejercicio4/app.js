// Función para obtener recomendaciones de canciones y eventos históricos
function obtenerRecomendaciones(year) {
    // Verificar si se proporciona el año como parámetro
    if (!year) {
      console.log("Año no encontrado. Por favor, proporciona un año.");
      return;
    }
  
    // Función para buscar eventos históricos por año
    function buscarEventoHistorico(year) {
      const eventosHistoricos = {
        2000: "Se lanzó el sistema operativo Windows 2000",
        2005: "YouTube fue lanzado al público",
        2010: "Se produjo el terremoto en Haití",
        2015: "El Acuerdo de París sobre cambio climático fue adoptado",
        2020: "La pandemia de COVID-19 se extendió por todo el mundo"
        // Agrega más eventos según sea necesario
      };
  
      return eventosHistoricos[year] || "Sin Información";
    }
  
    // Función para obtener canciones populares por año
    function cancionesPopularesPorAno(year) {
      let cancionesPorAno;
  
      switch (year) {
        case 2000:
          cancionesPorAno = {
            "Pop": ["Song 1", "Song 2", "Song 3"],
            "Rock": ["Rock Song 1", "Rock Song 2", "Rock Song 3"],
            "HipHop": ["HipHop Song 1", "HipHop Song 2", "HipHop Song 3"]
          };
          break;
        case 2005:
          cancionesPorAno = {
            "Pop": ["Pop Song 1", "Pop Song 2", "Pop Song 3"],
            "Rock": ["Rock Song 4", "Rock Song 5", "Rock Song 6"],
            "HipHop": ["HipHop Song 4", "HipHop Song 5", "HipHop Song 6"]
          };
          break;
          case 2010:
          cancionesPorAno = {
            "Pop": ["Song 1", "Song 2", "Song 3"],
            "Rock": ["Rock Song 1", "Rock Song 2", "Rock Song 3"],
            "HipHop": ["HipHop Song 1", "HipHop Song 2", "HipHop Song 3"]
          };
          break;
        case 2015:
          cancionesPorAno = {
            "Pop": ["Pop Song 1", "Pop Song 2", "Pop Song 3"],
            "Rock": ["Rock Song 4", "Rock Song 5", "Rock Song 6"],
            "HipHop": ["HipHop Song 4", "HipHop Song 5", "HipHop Song 6"]
          };
          break;
          case 2020:
          cancionesPorAno = {
            "Pop": ["Song 1", "Song 2", "Song 3"],
            "Rock": ["Rock Song 1", "Rock Song 2", "Rock Song 3"],
            "HipHop": ["HipHop Song 1", "HipHop Song 2", "HipHop Song 3"]
          };
          break;
        // Agregar más casos según sea necesario
        default:
          cancionesPorAno = null;
          console.log(`No se encontraron canciones populares para el año ${year}`);
      }
  
      return cancionesPorAno;
    }
  
    // Verificar si el año proporcionado está en el rango de eventos históricos
    const eventoHistorico = buscarEventoHistorico(year);
    console.log(`Eventos históricos de ${year}: ${eventoHistorico !== "Sin Información" ? eventoHistorico : "Año sin Información!!"}`);
  
    // Obtener recomendaciones de canciones por género
    console.log(`Recomendaciones de canciones populares de ${year}:`);
    const cancionesPorAnoObj = cancionesPopularesPorAno(year);
    if (cancionesPorAnoObj) {
      for (const genero in cancionesPorAnoObj) {
        const canciones = cancionesPorAnoObj[genero];
        console.log(`- Género ${genero}: ${canciones.join(', ')}`);
      }
    }
  }
  
  //generamos recomendaciones
  const year = 2015;
  obtenerRecomendaciones(year);
  