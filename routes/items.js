const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('items', {
        title: 'Товары',
        isAdd: true
    })

})

module.exports = router