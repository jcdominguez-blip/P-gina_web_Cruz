//funcion para navresponsive//





// Función para mostrar detalles del proyecto
function showProjectDetails(element) {
    const title = element.querySelector('span').getAttribute('data-title');
    const description = element.querySelector('span').getAttribute('data-description');
    const images = JSON.parse(element.querySelector('span').getAttribute('data-images'));

    document.getElementById('project-title').innerText = title;
    document.getElementById('project-description').innerText = description;

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

    