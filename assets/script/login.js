document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // Realiza la lógica de autenticación si es necesario
      alert('Autenticación exitosa. Redirigiendo...');
      window.location.href = './assets/pages/contactos.html'; // Ajusta la ruta según tus necesidades
  });
});
