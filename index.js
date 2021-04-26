
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

app.use(express.static('public'))

app.get('/', (req, res)=>{
   res.render('index', {
       title: 'Главная страница',
       isHome: true
   })  // рендер указанной страницы

})

app.get('/add', (req, res)=>{
    res.render('add', {
        title: 'Добавить товар',
        isAdd: true
    })
})

app.get('/items', (req, res)=>{
    res.render('items', {
        title: 'Товары',
        isItems: true
    })
})








const PORT = process.env.PORT || 4000


app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT} `)
})