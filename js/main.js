/* =============================================
   ACMH Power Apps - Manuales de Usuario
   Versión: Panel lateral con acordeón
   ============================================= */

/**
 * Expande o colapsa un módulo del acordeón
 * @param {HTMLElement} button - Botón del acordeón clickeado
 */
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains('open');
    
    // Toggle del contenido
    if (isOpen) {
        content.classList.remove('open');
        button.classList.remove('active');
    } else {
        content.classList.add('open');
        button.classList.add('active');
    }
}

/**
 * Carga un manual en el área de contenido
 * @param {HTMLElement} item - Elemento del menú clickeado
 */
function loadManual(item) {
    const embedUrl = item.getAttribute('data-embed');
    const title = item.getAttribute('data-title');
    
    // Remover clase active de todos los items
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('active');
    });
    
    // Agregar clase active al item seleccionado
    item.classList.add('active');
    
    // Actualizar título
    document.getElementById('current-title').textContent = title;
    
    // Ocultar pantalla de bienvenida
    document.getElementById('welcome-screen').style.display = 'none';
    
    // Mostrar y cargar iframe
    const embedContainer = document.getElementById('embed-container');
    const iframe = document.getElementById('manual-iframe');
    
    embedContainer.style.display = 'block';
    iframe.src = embedUrl;
    
    // Cerrar sidebar en móvil
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

/**
 * Abre o cierra el sidebar en móvil
 */
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
    document.querySelector('.overlay').classList.toggle('active');
}

/* =============================================
   Event Listeners
   ============================================= */

// Cerrar sidebar al redimensionar a desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.sidebar').classList.remove('open');
        document.querySelector('.overlay').classList.remove('active');
    }
});
