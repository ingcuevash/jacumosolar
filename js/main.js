document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const enviado = urlParams.get('enviado');

  if (enviado === '1') {
    const mensaje = document.getElementById('mensaje-confirmacion');
    if (mensaje) {
      mensaje.style.display = 'block';
    }
  }
});
