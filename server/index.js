const express = require('express'),
    ctrl = require('./controllers/messages_controller'),
    app = express(),
    port = 3001;

app.use(express.json())

app.use(express.static(__dirname + '/../public/build'))
// app.use(express.static('/Users/nickhunsaker/Desktop/DevMtn/week-04/node-2-afternoon/public/build'))

app.get('/api/messages', ctrl.read)
app.post('/api/messages', ctrl.create)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)

app.listen(port, () => console.log(`Server running on ${port}`))