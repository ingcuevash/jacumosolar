const form = document.getElementById('form-contacto');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const datos = {
        nombre: form.nombre.value,
        correo: form.correo.value,
        mensaje: form.mensaje.value
    };

    try{
        const res = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(datos)
        });

        const respuesta = await res.json();
        alert(respuesta.message);
        form.reset();
        } catch (err) {
            alert('Error al enviar el mensaje');
            console.error(err);
        } 
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Cambia cada 5 segundos