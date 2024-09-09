const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    
    const user = {
        name,
        email,
        password,
    };

    
    fs.appendFile('users.txt', JSON.stringify(user) + '\n', (err) => {
        if (err) throw err;
        console.log('User data saved.');
    });

   
    res.send('Signup successful! Your data has been saved.');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
