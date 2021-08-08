const router = require('express').Router()

router.get('/', (req, res) =>{
    res.render('ravenclaw', {
        loggedIn: req.session.loggedIn
    })
})

module.exports = router