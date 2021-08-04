const { Spells } = require('../models');

const spellsData = [
    {
        spell_name: 'Aguamenti',
        spell_type: 'Charm, Conjuration',
        spell_affect: 'Produces water from the wand tip'
    },
    {
        spell_name: 'Alohomora ',
        spell_type: 'Unlocking Charm',
        spell_affect: 'Unlocks doors and other locked objects'
    },
    {
        spell_name: 'Aparecium',
        spell_type: 'Revealing Charm',
        spell_affect: 'Reveals secret messages written in invisible ink'
    },
    {
        spell_name: 'Avada Kedavra ',
        spell_type: 'Killing Curse',
        spell_affect: 'Causes death'
    },
    {
        spell_name: 'Confringo ',
        spell_type: 'Curse',
        spell_affect: 'Produces a fiery explosion'
    },
    {
        spell_name: 'Crucio',
        spell_type: 'Curse',
        spell_affect: 'Inflicts tortuous pain'
    },
    {
        spell_name: 'Expecto Patronum',
        spell_type: 'Patronus Charm',
        spell_affect: 'Conjures a protective animal cloak to defend against dark creatures'
    },
    {
        spell_name: 'Expelliarmus ',
        spell_type: 'Charm',
        spell_affect: 'Disarms your opponent'
    },
    {
        spell_name: 'Geminio',
        spell_type: 'Doubling Charm',
        spell_affect: 'Duplicates the target'
    },
    {
        spell_name: 'Immobulus',
        spell_type: 'Charm',
        spell_affect: 'Immobilises and stops the target'
    },
    {
        spell_name: 'Obliviate',
        spell_type: 'Charm',
        spell_affect: 'Erases specific memories'
    },
    {
        spell_name: 'Reducto ',
        spell_type: 'Curse',
        spell_affect: 'Breaks objects'
    },


];

const seedSpells = () => Spells.bulkCreate(spellsData);

module.exports = seedSpells;