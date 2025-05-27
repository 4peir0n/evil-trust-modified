// Función para validar el formulario
function validateForm() {
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const dni = document.getElementById('dni').value.trim();

    if (!nombre || !telefono || !email || !dni) {
        showError('Por favor, complete todos los campos');
        return false;
    }

    if (!isValidEmail(email)) {
        showError('Por favor, ingrese un correo electrónico válido');
        return false;
    }

    if (!isValidPhone(telefono)) {
        showError('Por favor, ingrese un número de teléfono válido');
        return false;
    }

    if (!isValidDNI(dni)) {
        showError('Por favor, ingrese un número de DNI válido');
        return false;
    }

    return true;
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para validar teléfono
function isValidPhone(phone) {
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(phone);
}

// Función para validar DNI
function isValidDNI(dni) {
    const dniRegex = /^\d{8}$/;
    return dniRegex.test(dni);
}

// Función para mostrar errores
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const form = document.querySelector('.wifi-form');
    form.insertBefore(errorDiv, form.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Función para manejar el envío del formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.wifi-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Simular envío del formulario
            const formData = new FormData(form);
            console.log('Datos enviados:', Object.fromEntries(formData));
            
            // Mostrar mensaje de éxito
            showSuccessMessage();
        }
    });
});

// Función para mostrar mensaje de éxito
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <h2>¡Conexión Exitosa!</h2>
        <p>Ya puedes disfrutar del WiFi gratuito en Mall Plaza Arequipa</p>
        <button onclick="window.location.reload()">Volver</button>
    `;
    
    document.querySelector('.inner-container').innerHTML = '';
    document.querySelector('.inner-container').appendChild(successDiv);
}
