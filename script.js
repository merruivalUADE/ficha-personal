document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // --- 1. FUNCIÓN DE APLICACIÓN DEL TEMA ---
    const applyTheme = (theme) => {
        if (theme === 'dark-mode') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            // Cambiar el ícono del botón a Sol
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            // Cambiar el ícono del botón a Luna
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        // Guardar la preferencia en el navegador
        localStorage.setItem('theme', theme);
    };

    // --- 2. CARGAR EL TEMA GUARDADO AL INICIO ---
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Aplicar el tema claro por defecto si no hay nada guardado
        applyTheme('light-mode');
    }

    // --- 3. MANEJADOR DEL EVENTO CLICK ---
    themeToggle.addEventListener('click', () => {
        // Si el body tiene 'light-mode', cámbialo a 'dark-mode', y viceversa
        if (body.classList.contains('light-mode')) {
            applyTheme('dark-mode');
        } else {
            applyTheme('light-mode');
        }
    });
});