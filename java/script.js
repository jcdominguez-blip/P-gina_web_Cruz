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
        intervalId = setInterval(changeImage, 3000); // Cambia la imagen cada 3 segundos
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