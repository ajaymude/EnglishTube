const VocabRoute = require('express').Router()

VocabRoute.get('/vocab', (req, res)=>{
    res.send('this is vocab routes')
})

module.exports = VocabRoute ; 