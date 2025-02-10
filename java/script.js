function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isVisible = content.style.display === "block";

    // Oculta todos los contenidos de acordeón
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach((item) => {
        item.style.display = 'none';
    });

    // Muestra el contenido correspondiente al elemento clicado
    content.style.display = isVisible ? "none" : "block";

    // Cambiar la imagen y el texto
    const imgSrc = element.querySelector('span').getAttribute('data-img');
    const title = element.querySelector('span').getAttribute('data-title');
    const description = element.querySelector('span').getAttribute('data-description');

    const projectImage = document.getElementById('project-image');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');

    projectImage.src = imgSrc;
    projectTitle.textContent = title;
    projectDescription.textContent = description;
}

function changeContent(element) {
    document.getElementById('project-description').innerText = element.getAttribute('data-description');
}

//transicion automatica en imagenes//

let currentIndex = 0;
let images = [];
let intervalId;

function changeImage() {
    const imgElement = document.getElementById('project-image');
    if (images.length > 0) {
        imgElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }
}

function toggleAccordion(element) {
    const accordion = element.classList.toggle('active'); // Cambia la clase activa
    const content = element.nextElementSibling; // Obtiene el contenido del acordeón
    
    if (accordion) {
        // Si el acordeón se activa, obtén las imágenes y comienza el cambio
        const span = element.querySelector('span');
        images = JSON.parse(span.getAttribute('data-images'));
        currentIndex = 0; // Reinicia el índice al cambiar de proyecto
        changeImage(); // Muestra la primera imagen inmediatamente
        
        // Reiniciar el intervalo si ya hay uno
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(changeImage, 2000); // Cambia la imagen cada 2 segundos
    } else {
        // Si se desactiva, puedes detener el intervalo
        clearInterval(intervalId);
    }
    
    // Mostrar u ocultar el contenido
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

//responsive hamburguer funcion//

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Alterna la clase para mostrar/ocultar el menú
});

//footer-clock//


        function updateClock() {
            const now = new Date();
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            document.getElementById('clock').textContent = now.toLocaleTimeString('es-AR', options);
        }
        setInterval(updateClock, 1000);
        updateClock(); // Update clock immediately on load
  


//boton lenguaje//

document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-en], [data-es]');

    // Función para cambiar el idioma
    function toggleLanguage() {
        const currentLanguage = languageToggle.textContent.trim().toLowerCase();
        const newLanguage = currentLanguage === 'español' ? 'english' : 'español';

        // Cambiar el texto del botón
        languageToggle.textContent = newLanguage.charAt(0).toUpperCase() + newLanguage.slice(1);

        // Cambiar el contenido de los elementos
        elementsToTranslate.forEach(element => {
            if (currentLanguage === 'español') {
                element.textContent = element.getAttribute('data-en');
            } else {
                element.textContent = element.getAttribute('data-es');
            }
        });
    }

    // Evento para cambiar el idioma al hacer clic en el botón//
    languageToggle.addEventListener('click', toggleLanguage);
});

// Traduccion formulario//

function toggleLanguage() {
    const currentLanguage = languageToggle.textContent.trim().toLowerCase();
    const newLanguage = currentLanguage === 'español' ? 'english' : 'español';

    // Cambiar el texto del botón
    languageToggle.textContent = newLanguage.charAt(0).toUpperCase() + newLanguage.slice(1);

    // Cambiar el contenido de los elementos
    document.querySelectorAll('[data-en], [data-es]').forEach(element => {
        if (currentLanguage === 'español') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-es');
        }
    });

    // Cambiar los placeholders y labels del formulario
    const formLabels = document.querySelectorAll('.form-group label');
    formLabels.forEach(label => {
        if (currentLanguage === 'español') {
            label.textContent = label.getAttribute('data-en');
        } else {
            label.textContent = label.getAttribute('data-es');
        }
    });
}

// Smooth Scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href'); // Obtiene el ID del objetivo
        const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo

        if (targetElement) {
            // Desplazamiento suave
            targetElement.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'start' // Alinea el elemento en la parte superior de la ventana
            });
        }
    });
});

// Función para el efecto de máquina de escribir
function typeWriterEffect() {
    const typewriterElement = document.getElementById('typewriter');
    const texts = ["HELLO WORD", "Studio Cruz"]; // Textos a mostrar
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (!isDeleting) {
            // Escribir el texto
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            // Si se ha escrito todo el texto, comenzar a borrar
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 1000); // Esperar 1 segundo antes de borrar
            } else {
                setTimeout(type, 100); // Velocidad de escritura
            }
        } else {
            // Borrar el texto
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            // Si se ha borrado todo el texto, pasar al siguiente texto
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Cambiar al siguiente texto
                setTimeout(type, 500); // Esperar 0.5 segundos antes de escribir el siguiente texto
            } else {
                setTimeout(type, 50); // Velocidad de borrado
            }
        }
    }

    // Iniciar la animación
    type();
}

// Ejecutar la función cuando la página esté cargada
document.addEventListener('DOMContentLoaded', typeWriterEffect);