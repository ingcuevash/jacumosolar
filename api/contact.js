const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'INGcr1s-',
    database: 'jacumosolar'
});


// Ruta para recibir mensajes
app.post('/api/contact', (req, res)=> {
    const {nombre, correo, mensaje } = req.body;

    const sql = 'INSERT INTO mensajes_contacto (nombre, correo, mensaje) VALUES (?, ?, ?)';
    db.query(sql, [nombre, correo, mensaje], (err, result) => {
        if (err) {
            console.error('Error al guardar el mensaje:' ,err);
            return res.status(500).json({ error: 'Error al guardar el mensaje'});
        }
        res.status(200).json({ message: 'Mensaje guardado correctamente'});
        });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
