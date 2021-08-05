const router = require('express').Router();
const { Spells } = require('../../models');

// get all spells
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

   // create a new spell
  router.post('/', (req, res) => {

  Spells.create({
    id: req.body.id,
    spell_name: req.body.spell_name,
    spell_type: req.body.spell_type,
    spell_affect: req.body.spell_affect
  })
  .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

    // delete spell by ID
    router.delete('/:id', (req, res) => {
      Spells.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(data => {
          if (!data) {
            res.status(404).json({ message: 'No Spell found with this id!' });
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