// import
const express = require('express')
const app = express()
const port = 8080


//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', {text: 'This is ejs'})
})

app.get('/about', (req, res) => {
    res.render('about', {text: 'Our History'})
})

//listen to the port 8080
app.listen(port, () => console.info(`Listening on port ${port}`))