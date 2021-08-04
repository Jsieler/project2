const router = require('express').Router();
const { Wizards, Houses } = require('../../models');


router.get('/', (req, res) => {

  Wizards.findAll({

    attributes: ['id', 'first_name', 'last_name', 'houses_id'],
    include: [{
      model: Houses,
      attributes: ['house_name'],
    }]
  })
    .then(WizardsData => {
      const Wiz = WizardsData.map(Wiz => Wiz.get({ plain: true }));
      res.render('wizards', { Wizards:Wiz, loggedIn: req.session.loggedIn });
      console.log(Wiz)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);

    });
});



module.exports = router;