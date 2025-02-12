// Función para mostrar/ocultar el menú hamburguesa
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Alternar la clase activa
});






// Función para mostrar detalles del proyecto
function showProjectDetails(element) {
    const title = element.querySelector('span').getAttribute('data-title');
    const description = element.querySelector('span').getAttribute('data-description');
    const images = JSON.parse(element.querySelector('span').getAttribute('data-images'));

    document.getElementById('project-title').innerText = title;
    document.getElementById('project-description').innerText = description; // Este es el párrafo donde se mostrará la descripción

    const gallery = document.getElementById('project-gallery');
    gallery.innerHTML = ''; // Limpiar la galería anterior

    // Generar imágenes de la galería
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = title;
        img.classList.add('small'); // Cambia según el tamaño deseado
        img.onclick = () => openModal(image); // Función para abrir el modal
        gallery.appendChild(img);
    });
}

// Función para abrir el modal
function openModal(imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'flex'; // Mostrar el modal
    modalImg.src = imageSrc;
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none'; // Ocultar el modal
}

// Cerrar el modal si se hace clic fuera de la imagen
window.onclick = function(event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        closeModal();
    }
}
//footer-clock//


        function updateClock() {
            const now = new Date();
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            document.getElementById('clock').textContent = now.toLocaleTimeString('es-AR', options);
        }
        setInterval(updateClock, 1000);
        updateClock(); // Update clock immediately on load

    //boton lenguaje//

    let currentLanguage = 'es'; // Idioma por defecto

    document.getElementById('language-toggle').addEventListener('click', function() {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es'; // Cambiar el idioma

        // Cambiar el texto del botón
        this.textContent = currentLanguage === 'es' ? 'Español' : 'English';

        // Cambiar el texto de los elementos
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute(currentLanguage === 'es' ? 'data-es' : 'data-en');
        });
    });

   

//nuevo description//

document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-title-en], [data-title-es], [data-description-en], [data-description-es]');
    
    // Establecer el idioma inicial (por ejemplo, español)
    let isSpanish = true; // Cambia esto a false si quieres que sea inglés por defecto

    // Función para cambiar el idioma
    function toggleLanguage() {
        isSpanish = !isSpanish; // Cambiar el estado del idioma

        // Cambiar el texto del botón
        languageToggle.textContent = isSpanish ? 'Inglés' : 'Español';

        // Cambiar el contenido de los elementos
        elementsToTranslate.forEach(element => {
            if (isSpanish) {
                if (element.hasAttribute('data-title-es')) {
                    element.textContent = element.getAttribute('data-title-es');
                }
                if (element.hasAttribute('data-description-es')) {
                    element.textContent = element.getAttribute('data-description-es');
                }
            } else {
                if (element.hasAttribute('data-title-en')) {
                    element.textContent = element.getAttribute('data-title-en');
                }
                if (element.hasAttribute('data-description-en')) {
                    element.textContent = element.getAttribute('data-description-en');
                }
            }
        });
    }

    // Inicializar el texto del botón
    languageToggle.textContent = isSpanish ? 'Español' : 'Inglés';

    // Evento para cambiar el idioma al hacer clic en el botón
    languageToggle.addEventListener('click', toggleLanguage);
});


