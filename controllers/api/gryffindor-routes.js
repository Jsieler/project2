const router = require('express').Router()

router.get('/', (req, res) =>{
    res.render('gryffindor', {
        loggedIn: req.session.loggedIn
    })
})

module.exports = router