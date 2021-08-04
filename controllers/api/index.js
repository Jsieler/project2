const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const quizRoutes = require('./quiz-routes.js');
const spellsRoutes = require('./spells-routes.js');
const wizardsRoutes = require('./wizards-routes.js');


router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/spells', spellsRoutes);
router.use('/wizards', wizardsRoutes);


module.exports = router;