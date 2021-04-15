const fs = require('fs')
const path =require('path')
//FS

fs.mkdir(path.join(__dirname, 'notes'), (err)=>{
    if(err) throw new Error(err)
    console.log('Directory has been created')
})

fs.writeFile(path.join(__dirname, 'notes', 'my_notes.txt'), 'Some text',
(err)=>{
    if(err) throw err
    console.log('file created')
}

)