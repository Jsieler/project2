const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, (req, res) => {
//     console.log(req.session);
//     console.log('======================');
//     TBD.findAll({
//       where: {
//         user_id: req.session.user_id
//       },
      
//     })
//       .then(dbPostData => {
//         const posts = dbPostData.map(post => post.get({ plain: true }));
//         res.render('dashboard', { TBD, loggedIn: true });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });


module.exports = router;
