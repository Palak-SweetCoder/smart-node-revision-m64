const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hey Dude!! I am okay.')
})

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01788888888' },
    { id: 3, name: 'purnima', email: 'purnima@gmail.com', phone: '01788888888' },
    { id: 4, name: 'jin', email: 'jin@gmail.com', phone: '01788888888' },
    { id: 5, name: 'vut', email: 'vut@gmail.com', phone: '01788888888' },
    { id: 6, name: 'petni', email: 'petni@gmail.com', phone: '01788888888' },
    { id: 7, name: 'pori', email: 'pori@gmail.com', phone: '01788888888' },
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user); 
})

app.listen(port, () => {
    console.log("Port running don't worry", port)
})