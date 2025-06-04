// Middleware para verificar API Key
require('dotenv').config();

module.exports = function (req, res, next) {
  const apiKey = req.header('x-api-key');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'API Key inválida o faltante' });
  }
  next();
};
