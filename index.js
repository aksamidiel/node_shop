const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.url)

    res.write('<h1></h1>')
    res.end()
})

server.listen(4000, ()=>{
    console.log('Server is running...')
})