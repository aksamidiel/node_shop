
const express =require('express')
const path=require('path')
const expH = require('express-handlebars')  // подкл движка

const homeRoutes = require('./routes/home')  // подключ роутов
const addRoutes = require('./routes/add') 
const itemsRoutes = require('./routes/items')

const app = express()   // аналог server

const hbs = expH.create({
    defaultLayout: 'main',
    extname: 'hbs'      // псевдоним для Handlebars
})

app.engine('hbs', hbs.engine) // регистрация движка в Express
app.set('view engine', 'hbs')  // использование движка
app.set('views', 'views')  // папка для шаблонов

app.use(express.static('public'))
app.use('/', homeRoutes) // использование роутов из папки routes
app.use('/add', addRoutes)
app.use('/items', itemsRoutes)


const PORT = process.env.PORT || 4000


app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT} `)
})