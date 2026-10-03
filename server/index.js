require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

require('./db');

const authRoutes = require('./routes/auth');
const callbackRoutes = require('./routes/callback');
const configRoutes = require('./routes/config');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Registrar rutas de API
app.use('/api', configRoutes);
app.use('/api', authRoutes);
app.use('/api', callbackRoutes);

// Soporte para callbacks directos en la raíz: http://host:3005/callback
app.use('/', callbackRoutes);

// Servir frontend compilado
const clientDist = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientDist));

app.get('*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(`FaceSentinel Client corriendo en http://0.0.0.0:${PORT}`);
  console.log(`Puerto configurado: ${PORT}`);
  console.log(`Callback activo en: /callback y /api/callback`);
  console.log(`=======================================================`);
});
