const { Questions } = require('../models');

const questionsData = [
  {
    question: "You've made it to Hogwarts, which means you've already brought a wand from Ollivander's, What material is at its core? ",
    choices: ["Phoenix Feather", "Dragon Heartstring", "Unicorn Hair"],
    quiz_id: 1,
  },
  {
    question: "Choose a Deathly Hallow",
    choices: ["The Elder Wand", "The Resurrection Stone", "The Cloak of Invisibility"],
    quiz_id: 1,
  },
  {
    question: "Which path do you intend to follow after leaving Hogwarts?",
    choices: ["I'd join the Ministry - I want to make a difference in the world", "I think I'd travel for a while before committing to a carrer.","I'd settle down and start a family as soon as possible!",""],
    quiz_id: 1,
  },
  {
    question: "What would you see in the Mirror of Erised?",
    choices: ["Myself, surrounded by riches", "Myself, surrounded by loving family and friends", "Myself, knowledgable above all", "Myself, experiencing a marvellous adventure"],
    quiz_id: 1,
  },
  {
    question: "It's Saturday, you've finished your homework, and you have some free time. You decide to spend some time away from you common room. Where do you go?",
    choices: ["The Forbidden Forest", "The library", "The kitchens", "The Room of Requirements"],
    quiz_id: 1,
  },
  {
    question: "You're allowed a pet at Hogwarts, an owl, a cat, or a toad. Which do you bring?",
    choices: ["Owl", "Cat", "Toad", "Nothing, I cant be trusted to look after a pet!"],
    quiz_id: 1,
  },
  {
    question: "The first Quidditch match of the season is approaching, and you can't wait to get involved. What role are you playing?",
    choices: ["Seeker. Iwant the glory!", "Chaser. I like to be involved, and work as part of the team", "Beater. I like having all that power", "Ill be in the crowd, making sure supporter morale is high!"],
    quiz_id: 1,
  },
  {
    question: "Which of your skills are you most proud of?",
    choices: ["My ability to absorb new information", "My ability to make new friends", "My ability to get what I want", "My ability to keep secrets"],
    quiz_id: 1,
  },
  {
    question: "Which of the following would you most like to study?",
    choices: ["Werewolves", "Ghosts", "Goblins", "Centaurs"],
    quiz_id: 1,
  },
  {
    question: "Given the choice, would you rather invent a potion that would gurantee you",
    choices: ["Glory", "Love", "Power", "Wisdom"],
    quiz_id: 1,
  },
  {
    question: "Once every century, the Flutterby bush produces flowers that adapt their scent to attract",
    choices: ["The sea", "Home", "A crackling log fire", "Fresh parchment"],
    quiz_id: 1,
  },
  {
    question: "Which quality do you value most?",
    choices: ["Intelligence", "Ambition", "Patience", "Courage"],
    quiz_id: 1,
  },
  {
    question: "What is your favorite color?",
    choices: ["Red", "Yellow", "Blue", "Green"],
    quiz_id: 1,
  },
  {
    question: "What spell would you cast",
    choices: ["Crucio", "Riddikulus", "Protego", "Absorbos librus"],
    quiz_id: 1,
  },
  {
    question: "What is your patronus",
    choices: ["Stag", "Otter", "Phoneix", "Snake"],
    quiz_id: 1,
  },
  
];

const seedQuestions = () => Product.bulkCreate(questionsData);

module.exports = seedQuestions;