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