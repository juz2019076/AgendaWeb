document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nuevoContactoForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Contacto agregado exitosamente');
    });
});
