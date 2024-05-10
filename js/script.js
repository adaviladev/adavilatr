document.addEventListener("DOMContentLoaded", function () {
  // Language Switching
  const languageElements = {
    english: {
      id: "english",
      hoverText: "English",
      defaultText: "inglés",
    },
    japanese: {
      id: "japanese",
      hoverText: "日本語",
      defaultText: "japonés",
    },
    portuguese: {
      id: "portuguese",
      hoverText: "português",
      defaultText: "portugués",
    },
    spanish: {
      id: "spanish",
      hoverText: "español",
      defaultText: "español",
    },
  };

  Object.values(languageElements).forEach((element) => {
    const spanElement = document.getElementById(element.id);
    if (spanElement) {
      spanElement.addEventListener("mouseover", function () {
        this.classList.add("hover");
        this.textContent = element.hoverText;
      });

      spanElement.addEventListener("mouseout", function () {
        this.classList.remove("hover");
        this.textContent = element.defaultText;
      });
    } else {
      console.error(`Element with ID '${element.id}' not found.`);
    }
  });

  // Citation Rotation
const citas = [
  `Álvaro es un profesional excepcionalmente dedicado y receptivo que siempre está dispuesto a ir más allá para satisfacer las necesidades de sus clientes.
  —Héctor Cartagena, Traductor`,
  `Altamente recomendado debido a la calidad de sus traducciones, así como al nivel de orientación al detalle en cada producto final.
  —Jennifer Moore, Psicóloga`,
  `Ha sido un agrado tratar con Álvaro, persona que ha respondido muy responsablemente a los trabajos acordados a través de la red.
  —Ignacio Carrasco U.`,
  `Durante el tiempo que trabajamos juntos, Álvaro demostró ser un trabajador centrado en objetivos y proactivo.
  —Ximena Peña M., Traductora`,
];
  let index = 0;
  const citaElement = document.querySelector(".cita p");

  function mostrarCita(direccion) {
    citaElement.classList.remove("slide-in-left", "slide-in-right");
    setTimeout(() => {
      citaElement.textContent = citas[index];
      citaElement.classList.add(
        direccion === "next" ? "slide-in-right" : "slide-in-left"
      );
    }, 10); // Adjust the timing based on your preference
  }

  function siguienteCita() {
    index = (index + 1) % citas.length;
    mostrarCita("next");
  }

  function anteriorCita() {
    index = (index - 1 + citas.length) % citas.length;
    mostrarCita("prev");
  }

  document.getElementById("siguiente").addEventListener("click", siguienteCita);
  document.getElementById("anterior").addEventListener("click", anteriorCita);

  mostrarCita();
});


const darkModeButton = document.getElementById('dark-mode-button');
darkModeButton.addEventListener('click', () => {
    const htmlElement = document.querySelector('html');
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
    }
});


