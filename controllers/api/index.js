const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const quizRoutes = require('./quiz-routes.js');
const spellsRoutes = require('./spells-routes.js');
const wizardsRoutes = require('./wizards-routes.js');
const gryffindorRoutes = require('./gryffindor-routes.js')
const hufflepuffRoutes = require('./hufflepuff-routes.js')
const ravenclawRoutes = require('./ravenclaw-routes.js')
const slytherinRoutes = require('./slytherin-routes.js')


router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/spells', spellsRoutes);
router.use('/wizards', wizardsRoutes);
router.use('/gryffindor', gryffindorRoutes);
router.use('/hufflepuff', hufflepuffRoutes);
router.use('/ravenclaw', ravenclawRoutes);
router.use('/slytherin', slytherinRoutes);


module.exports = router;