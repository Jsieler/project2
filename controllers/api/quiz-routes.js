const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Quiz, User, Questions } = require('../../models');


router.get('/', (req, res) => {
  Quiz.findAll({

    include: [
      {
        model: Questions,
        attributes: [
          'id',
          'question',
          'choices1',
          'choices2',
          'choices3',
          'choices4'
        ],
      },
    ]
  })
  .then(data => {
    const quiz = data.map(quiz => quiz.get({ plain: true }));
    res.json(data)
    // res.render('dashboard', { quiz, loggedIn: true });
    console.log(quiz)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});






module.exports = router;
