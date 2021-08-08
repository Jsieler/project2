const router = require('express').Router()

router.get('/', (req, res) =>{
    res.render('slytherin', {
        loggedIn: req.session.loggedIn
    })
})

module.exports = router