// En tu archivo login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe normalmente
  // Aquí puedes realizar cualquier validación o lógica antes de redirigir
  location.href = "../pages/contactos.html"; // Redirige a la página que desees
});
