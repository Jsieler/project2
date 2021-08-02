const router = require('express').Router();
const sequelize = require('../config/connection');
const { User,Questions } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Questions.findAll().then(data => {
    
      const newData = data.map(question => {
        return question.get({
          plain:true
        })
      })
      console.log(newData)
      res.render('dashboard', {
        questions:newData,
        loggedIn: req.session.loggedIn
      });
    }) 
  
 
  })


module.exports = router;
