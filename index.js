
const express =require('express')
const path=require('path')
const expH = require('express-handlebars')  // подкл движка

const app = express()   // аналог server

const hbs = expH.create({
    defaultLayout: 'main',
    extname: 'hbs'      // псевдоним для Handlebars
})

app.engine('hbs', hbs.engine) // регистрация движка в Express
app.set('view engine', 'hbs')  // использование движка
app.set('views', 'views')  // папка для шаблонов

app.get('/', (req, res)=>{
   res.render('index')  // рендер указанной страницы
   
})

app.get('/about', (req, res)=>{
    res.status(200)
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})








const PORT = process.env.PORT || 4000


app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT} `)
})