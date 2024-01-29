const astronautas = ['Juancito Astronauta', 'Pedro el Astronauta', 'Maria la Astronauta'];
  const mascotasAlienigenas = ['Pulpín', 'Boxitracio', 'Iguanaledón'];
  const pingüinosFranceses = ['Jean Pierre el Pingüino', 'Gerard el Pingüino', 'Simon el Pingüino'];
  const robotsEnamorados = ['Jose', 'Robertino', 'Arturito'];
  const perrosAstronautas = ['Rafael el Perro Astronauta', 'Samantha la Perra Astronauta', 'Chick el can Astronauta'];

  function generarHistoria(astronauta, mascotaAlienigena, pingüinoFrances, robotEnamorado, perroAstronauta) {
    const historia = `${astronauta} viajaba por el espacio junto a su mascota alienígena, ${mascotaAlienigena}. Un día, se encontraron con un pingüino muy peculiar llamado ${pingüinoFrances}, que sorprendentemente hablaba francés.

    Mientras tanto, en una lejana galaxia, el robots ${robotEnamorado} y ${perroAstronauta} se enamoraron perdidamente de unas hermosas plantas extraterrestres.

    Y así, entre aventuras espaciales, conversaciones en francés y amores intergalácticos, nuestros protagonistas exploraban los misterios del cosmos.`;

    return historia;
  }

  function generarYMostrarHistorias() {
    const historiasGeneradas = [];

    for (let i = 0; i < 4; i++) {
      const astronauta = astronautas[Math.floor(Math.random() * astronautas.length)];
      const mascotaAlienigena = mascotasAlienigenas[Math.floor(Math.random() * mascotasAlienigenas.length)];
      const pingüinoFrances = pingüinosFranceses[Math.floor(Math.random() * pingüinosFranceses.length)];
      const robotEnamorado = robotsEnamorados[Math.floor(Math.random() * robotsEnamorados.length)];
      const perroAstronauta = perrosAstronautas[Math.floor(Math.random() * perrosAstronautas.length)];

      historiasGeneradas.push(generarHistoria(astronauta, mascotaAlienigena, pingüinoFrances, robotEnamorado, perroAstronauta));
    }

    for (let i = 0; i < 4; i++) {
      document.getElementById(`historiaDiv${i + 1}`).innerHTML = `<p>${historiasGeneradas[i]}</p>`;
    }
  }

  function limpiarHistorias() {
    for (let i = 1; i <= 4; i++) {
      document.getElementById(`historiaDiv${i}`).innerHTML = '';
    }
  }