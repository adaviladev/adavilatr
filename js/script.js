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
    `«Álvaro es un profesional excepcionalmente dedicado y receptivo que siempre está dispuesto a ir más allá para satisfacer las necesidades de sus clientes.»
  —Héctor Cartagena, Traductor`,
    `«Altamente recomendado debido a la calidad de sus traducciones, así como al nivel de orientación al detalle en cada producto final.»
  —Jennifer Moore, Psicóloga`,
    `«Ha sido un agrado tratar con Álvaro, persona que ha respondido muy responsablemente a los trabajos acordados a través de la red.»
  —Ignacio Carrasco U.`,
    `«Durante el tiempo que trabajamos juntos, Álvaro demostró ser un trabajador centrado en objetivos y proactivo.»
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

//Blog display

document.addEventListener("DOMContentLoaded", () => {
  const blogPosts = [
    {
      title: "La revolución de la IA en la traducción",
      date: "27 de junio de 2024",
      content:
        "La <strong>inteligencia artificial</strong> está transformando la traducción del japonés al español, ofreciendo <em>rapidez</em>, <em>eficiencia</em> y accesibilidad sin precedentes. Sin embargo, la figura del <strong>traductor humano</strong> sigue siendo imprescindible para garantizar que las traducciones sean precisas, culturalmente relevantes y de alta calidad. La colaboración entre la IA y los traductores humanos promete un futuro brillante, donde la tecnología y la experiencia humana se complementan para ofrecer servicios de traducción excepcionales.",
    },
    {
      title: "Beneficios y limitaciones de la IA",
      date: "20 de junio de 2024",
      content:
        "A pesar de los avances, la IA todavía puede tener dificultades con textos complejos o especializados, donde el contexto y la precisión son cruciales. Capturar <em>matices culturales</em> y <em>emocionales</em> sigue siendo un desafío para la IA. Las expresiones idiomáticas y las sutilezas culturales a menudo requieren la intervención de un <strong>traductor humano</strong> para asegurar que el significado y el tono se mantengan intactos.",
    },
    {
      title: "Tecnologías modernas en la traducción profesional",
      date: "10 de junio de 2024",
      content:
        "En la era digital, los traductores profesionales tienen acceso a una variedad de <strong>tecnologías avanzadas</strong> que mejoran la precisión y eficiencia de su trabajo. Herramientas de <em>Traducción Asistida por Ordenador (TAO)</em>, como SDL Trados y memoQ, facilitan la gestión de proyectos de traducción mediante memorias de traducción y bases de datos terminológicas. Además, las <strong>herramientas de gestión de terminología</strong> ayudan a mantener la coherencia en el uso de términos especializados. Las plataformas de <em>traducción automática neural</em>, como DeepL, ofrecen traducciones preliminares que los traductores revisan y perfeccionan. La integración de estas tecnologías no solo agiliza el proceso de traducción, sino que también permite a los traductores centrarse en aspectos más creativos y culturales del texto, garantizando una adaptación precisa y culturalmente adecuada.",
    },
  ];

  let currentPostIndex = 0;

  const blogPostsSection = document.getElementById("blog-posts");
  const prevButton = document.getElementById("prev-post");
  const nextButton = document.getElementById("next-post");

  function displayPost(index) {
    blogPostsSection.innerHTML = "";
    const post = blogPosts[index];
    const article = document.createElement("article");
    article.classList.add("mb-4", "p-3", "rounded", "shadow-sm");
    article.innerHTML = `
          <h3>${post.title}</h3>
          <p><small>${post.date}</small></p>
          <p>${post.content}</p>
      `;
    blogPostsSection.appendChild(article);
  }

  function updateNavigationButtons() {
    prevButton.disabled = currentPostIndex === 0;
    nextButton.disabled = currentPostIndex === blogPosts.length - 1;
  }

  prevButton.addEventListener("click", () => {
    if (currentPostIndex > 0) {
      currentPostIndex--;
      displayPost(currentPostIndex);
      updateNavigationButtons();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPostIndex < blogPosts.length - 1) {
      currentPostIndex++;
      displayPost(currentPostIndex);
      updateNavigationButtons();
    }
  });

  // Inicializar la primera publicación
  displayPost(currentPostIndex);
  updateNavigationButtons();
});
