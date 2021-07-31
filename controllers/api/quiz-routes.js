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
  .then(data => res.json(data))

    // .then(data => {
    //   const quiz = data.map((row) => ({ id: row.id, question: row.question, choices: [row.choice1, row.choice2, row.choice3, row.choice4] }))
    //   res.render('dashboard', {
    //     quiz,
    //   });
    // })

    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});








module.exports = router;