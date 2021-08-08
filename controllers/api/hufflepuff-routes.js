const router = require('express').Router()

router.get('/', (req, res) =>{
    res.render('hufflepuff', {
        loggedIn: req.session.loggedIn
    })
})

module.exports = router