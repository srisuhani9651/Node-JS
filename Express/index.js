const { log } = require("console")
const express = require("express")
const app = express()
const PORT = 8000

app.get('/', function(req, res){
    res.end('Homepage')
})
app.get('/contact-us', (req, res)=>{
    res.end("Contact us on our email address!")
})

app.post('/tweet', (reqq, res)=>{
    res.end("Tweet created successfully!")
} )

app.listen(8000, ()=> console.log(`Our server is running on the PORT ${PORT}`)
)