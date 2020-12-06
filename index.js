const express = require("express");
require('dotenv').config()
const app = express();
app.get('/', (req, res) => {
    res.send('Hello mern blog');
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Your app is running');
});