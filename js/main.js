document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get("enviado") === "1") {
    const mensaje = document.getElementById("mensaje-confirmacion");
    if (mensaje) {
      mensaje.style.display = "block";
    }
  }
});
