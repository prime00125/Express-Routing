const express = require('express');
const app = express();

const port = 3001;

// TO PASS THE MESSAGE
app.get('/',(req,res) =>{
    res.send('Hello, World')
})

// TO PASS THE MESSAGE IN JSON
app.get('/',(req,res) =>{
    res.json({message : 'this is get request homepage'})
})

// TO ROUTE THE USER PAGE
app.get('/Users',(req,res) =>{
    res.json({message : 'this is get request in user page'})
})

// to get id in users page
app.get('/User/:id',(req,res) =>{
    res.json({message : `this is get user id with id ${req.params.id}`})
})

// to post new User
app.post('/Users/',(req,res) =>{
    res.json({message : 'create new User with a post method'})
})

// to put the same user 
app.put('/Users/:id',(req,res)=>{
    res.json({message : `this is update the data with put request using the id ${req.params.id} `})
})

// to delete the user
app.delete('/Users/:id',(req,res) =>{
    res.json({message : `this is delete the data with delete request using the id ${req.params.id}`})
})






app.listen(port, () =>{
    console.log(`example app is listening on port :  ${port}`)
})