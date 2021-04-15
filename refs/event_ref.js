const EventEmitter = require('events')

class Logger extends EventEmitter{
    log(message){
        this.emit('message', `${message} ${Date.now()}`)
    }

}


const logg = new Logger()
logg.on('message', data =>{
    console.log(data)
})


logg.log('Some message')

