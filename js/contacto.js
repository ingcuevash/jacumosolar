  document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el envío real

    // Aquí puedes agregar lógica real para enviar por email, API, etc.

    // Mostrar mensaje de confirmación
    const mensaje = document.getElementById('mensaje-confirmacion');
    mensaje.style.display = 'block';

    // Limpiar formulario
    this.reset();

    // Ocultar mensaje luego de 4 segundos
    setTimeout(() => {
      mensaje.style.display = 'none';
    }, 4000);
  });