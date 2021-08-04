const { Questions } = require('../models');

// Question Values
// 1.Gryffindor
// 2.Hufflepuff
// 3.Ravenclaw
// 4.Slytherin

const questionsData = [
  {
    question: "You've made it to Hogwarts, which means you've already brought a wand from Ollivander's, What material is at its core? ",
    choices1: "Phoenix Feather",
    choices2: "Unicorn Hair",
    choices3: "Dragon Heartstring",
    choices4: "Arachnid Fang",
    quiz_id: 1,
  },
  {
    question: "Choose a Deathly Hallow",
    choices1: "The Cloak of Invisibility",
    choices2: "The Resurrection Stone",
    choices3: "None",
    choices4: "The Elder Wand",
    quiz_id: 1,
  },
  {
    question: "Which path do you intend to follow after leaving Hogwarts?",
    choices1: "I'd settle down and start a family as soon as possible!",
    choices2: "I think I'd travel for a while before committing to a carrer.",
    choices3: "I'd join the Ministry - I want to make a difference in the world",
    choices4: "I'd continue to work hard in order to achieve as much success as possible.",
    quiz_id: 1,
  },
  {
    question: "What would you see in the Mirror of Erised?",
    
    choices1: "Myself, surrounded by loving family and friends",
    choices2: "Myself, experiencing a marvellous adventure",
    choices3: "Myself, knowledgable above all",
    choices4: "Myself, surrounded by riches",
    quiz_id: 1,
  },
  {
    question: "It's Saturday, you've finished your homework, and you have some free time. You decide to spend some time away from you common room. Where do you go?",
    choices1: "The Room of Requirements",
    choices2: "The kitchens",
    choices3: "The library",
    choices4: "The Forbidden Forest",
    quiz_id: 1,
  },
  {
    question: "You're allowed a pet at Hogwarts, an owl, a cat, or a toad. Which do you bring?",
    choices1: "Owl",
    choices2: "Toad",
    choices3: "Cat",
    choices4: "Nothing, I cant be trusted to look after a pet!",
    quiz_id: 1,
  },
  {
    question: "The first Quidditch match of the season is approaching, and you can't wait to get involved. What role are you playing?",
    choices1: "Seeker. Iwant the glory!",
    choices2: "Ill be in the crowd, making sure supporter morale is high!",
    choices3: "Chaser. I like to be involved, and work as part of the team",
    choices4: "Beater. I like having all that power",
    quiz_id: 1,
  },
  {
    question: "Which of your skills are you most proud of?",
    choices1: "My ability to keep secrets",
    choices2: "My ability to make new friends",
    choices3: "My ability to absorb new information",
    choices4: "My ability to get what I want",
    quiz_id: 1,
  },
  {
    question: "Which of the following would you most like to study?",
    choices1: "Centaurs",
    choices2: "Ghosts",
    choices3: "Werewolves",
    choices4: "Goblins",
    quiz_id: 1,
  },
  {
    question: "Given the choice, would you rather invent a potion that would gurantee you",
    choices1: "Glory",
    choices2: "Love",
    choices3: "Wisdom",
    choices4: "Power",
    quiz_id: 1,
  },
  {
    question: "Once every century, the Flutterby bush produces flowers that adapt their scent to attract",
    choices1: "Home",
    choices2: "Fresh parchment",
    choices3: "The sea",
    choices4: "A crackling log fire",
    quiz_id: 1,
  },
  {
    question: "Which quality do you value most?",
    choices1: "Courage",
    choices2: "Patience",
    choices3: "Intelligence",
    choices4: "Ambition",
    quiz_id: 1,
  },
  {
    question: "What is your favorite color?",
    choices1: "Red",
    choices2: "Yellow",
    choices3: "Blue",
    choices4: "Green",
    quiz_id: 1,
  },
  {
    question: "What spell would you cast?",
    choices1: "Protego",
    choices2: "Riddikulus",
    choices3: "Absorbos librus",
    choices4: "Crucio",
    quiz_id: 1,
  },
  {
    question: "What is your patronus?",
    choices1: "Phoneix",
    choices2: "Otter",
    choices3: "Stag",
    choices4: "Snake",
    quiz_id: 1,
  },

];
var questionIndex = -1
function nextQuestion() {
  document.body.innerHTML = '';
    ++questionIndex;
      document.write(questionsData[questionIndex].question + "<br />");
  
          for (var j=0; j < questionsData[questionIndex].choices.length; j++) {
          document.write("<input type=radio id=myRadio name=radAnswer>" + questionsData[questionIndex].choices[j] + "<br />");
          }
          
     if (questionIndex < (questionsData.length - 1)) {
      var nextButton = document.createElement("input");
      nextButton.type = "button";
      nextButton.value = "Next question";
      nextButton.addEventListener('click', nextQuestion);
      document.body.appendChild(nextButton);
     }
  };
  
  nextQuestion();



const seedQuestions = () => Questions.bulkCreate(questionsData);

module.exports = seedQuestions;
