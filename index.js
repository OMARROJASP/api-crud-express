const express = require('express');
const app = express(); // Cambia esto - debe ser express(), no express.Router()
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const routerProfesor = require('./routes/profesorRoutes.js')

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesor', routerProfesor)

app.listen(3000, () => {
    console.log('Servidor activo');
});