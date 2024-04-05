document.addEventListener('DOMContentLoaded', function () {
    const citas = [
      "Álvaro es un profesional excepcionalmente dedicado y receptivo que siempre está dispuesto a ir más allá para satisfacer las necesidades de sus clientes. —Héctor Cartagena, Traductor",
      "Altamente recomendado debido a la calidad de sus traducciones, así como al nivel de orientación al detalle en cada producto final. —Jennifer Moore, Psicóloga",
      "Ha sido un agrado tratar con Álvaro, persona que ha respondido muy responsablemente a los trabajos acordados a través de la red. —Ignacio Carrasco U. ",
      "Durante el tiempo que trabajamos juntos, Álvaro demostró ser un trabajador centrado en objetivos y proactivo. —Ximena Peña M., Traductora"
      // Agrega más citas según sea necesario
    ];
    let index = 0;
  
    const citaElement = document.querySelector('.cita p');
  
    function mostrarCita(direccion) {
      citaElement.classList.remove('slide-in-left', 'slide-in-right');
      setTimeout(() => {
        citaElement.textContent = citas[index];
        citaElement.classList.add(direccion === 'next' ? 'slide-in-right' : 'slide-in-left');
      }, 10); // Adjust the timing based on your preference
    }
  
    function siguienteCita() {
      index = (index + 1) % citas.length;
      mostrarCita('next');
    }
  
    function anteriorCita() {
      index = (index - 1 + citas.length) % citas.length;
      mostrarCita('prev');
    }
  
    document.getElementById('siguiente').addEventListener('click', siguienteCita);
    document.getElementById('anterior').addEventListener('click', anteriorCita);
  
    mostrarCita();
});

  