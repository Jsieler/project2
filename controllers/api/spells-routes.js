const router = require('express').Router();
const { Spells } = require('../../models');

router.get('/', (req, res) => {
    Spells.findAll().then(data => {
    
      const newData = data.map(spells => {
        return spells.get({
          plain:true
        })
      })
      console.log(newData)
      res.render('spells', {
        spells:newData,
        loggedIn: req.session.loggedIn
      });
    }) 

  })

  module.exports = router;