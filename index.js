
const express = require('express')
//import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('sristea')

})

app.get('/login',(req,res)=>{
    res.send('<h1>login here <h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
