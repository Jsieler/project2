const router = require('express').Router();
const { Wizards, Houses } = require('../../models');


// get all wizards and witches with house names
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

    // create a new wizard
    router.post('/', (req, res) => {

      Wizards.create({
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        houses_id: req.body.houses_id
      })
      .then(data => res.json(data))
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
      });

      // delete wizard by ID
      router.delete('/:id', (req, res) => {
        Wizards.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(data => {
            if (!data) {
              res.status(404).json({ message: 'No Wizard found with this id!' });
              return;
            }
            res.json(data);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
      });

module.exports = router;