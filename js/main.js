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