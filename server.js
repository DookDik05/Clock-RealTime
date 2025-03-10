const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res)=> {
    res.sendFile(__dirname, 'public', 'index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});